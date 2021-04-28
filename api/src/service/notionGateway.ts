import { convert } from "../markdownConverter/notion-converter";
import { parseNotion } from "../markdownConverter/notion/notion-parser";

const got = require('got');

const QUERY_PATH = '/api/v3/queryCollection'
const QURY_SPECIFIC_PATH = '/api/v3/syncRecordValues'
const CONTENT_PATH = '/api/v3/loadPageChunk'

const collectionQuery = {
  collectionId: process.env.NOTION_COLLECTIONID,
  collectionViewId: process.env.NOTION_COLLECTIONVIEWID,
  query:{
     filter:{
        filters:[
           {
              filter:{
                 value:{
                    type:"exact",
                    value:"Published"
                 },
                 operator:"enum_is"
              },
              property:"RxmV"
           }
        ],
        operator:"and"
     },
     aggregations:[
        {
           aggregator:"count"
        }
     ]
  },
  loader:{
     type:"table",
     limit:1000,
     searchQuery:"",
     userTimeZone:"Europe/Vienna",
     loadContentCover:true
  }
}

async function getAllIds() {
  const { body } = await got.post(`${process.env.NOTION_HOST}${process.env.NOTION_QUERY_PATH}`, {
    json: collectionQuery,
    responseType: 'json'
  })

  const entries = body.result.blockIds.map((id: any) => {
    const blockInfo = body.recordMap.block[id].value;
    return {
      id,
      title: blockInfo.properties.title[0][0],
      description: blockInfo.properties[process.env.NOTION_DESCRIPTION_PROPERTY as any][0][0],
      publishDate: blockInfo.properties[process.env.NOTION_PUBLISH_DATE_PROPERTY as any][0][1][0][1].start_date
    }
  })

  return entries
}

async function render(id: string) {
  const { body: overview } = await got.post(`${process.env.NOTION_HOST}${QURY_SPECIFIC_PATH}`, {
    json: {
      requests: [
        {
          id,
          table: "block",
          version: -1
        }
      ]
    },
    responseType: 'json'
  })

  if(!overview.recordMap.block[id].value) {
    throw Error("Could not read Notion doc with this ID - make sure public access is enabled");
  }

  const contentIds: any[] = overview.recordMap.block[id].value.content

  const content: any[] = []
  let recordMap: any = {}
  let lastChunk
  let hasMorePageChunks = true

  while(hasMorePageChunks) {
    const cursor: any = lastChunk && lastChunk.cursor || ({ stack: [] })

    const {body: chunk} = await got.post(`${process.env.NOTION_HOST}${CONTENT_PATH}`, {
      json: {
        pageId: id,
        limit: 100,
        cursor,
        chunkNumber: 0,
        verticalColumns: false
      },
      responseType: 'json'
    })

    recordMap = { ...recordMap, ...chunk.recordMap.block }

    lastChunk = chunk

    if(chunk.cursor.stack.length === 0) hasMorePageChunks = false
  }

  contentIds.forEach(id => {
    const block = recordMap[id]
    if(block) content.push(block.value)
  })

  const notionBlocks = parseNotion(content);
  return convert(notionBlocks);
}

async function getById(id: string) {
  const { body: overview } = await got.post(`${process.env.NOTION_HOST}${QURY_SPECIFIC_PATH}`, {
    json: {
      requests: [
        {
          id,
          table: "block",
          version: -1
        }
      ]
    },
    responseType: 'json'
  })

  const blockContent = overview.recordMap.block[id].value;
  if (blockContent === undefined) {
    return null;
  }

  const image = blockContent.format?.page_cover ?
    formatImage(blockContent.format?.page_cover) : undefined
  const title = blockContent.properties.title[0][0];

  return { title, image }
}

function formatImage(imageUrl: string) {
  return imageUrl.startsWith('/') ?
    `${process.env.NOTION_HOST}${imageUrl}` :
    imageUrl;
}

export {
  getAllIds,
  getById,
  render
}