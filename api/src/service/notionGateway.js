const got = require('got');
const renderNotionPage = require('./notionRenderer');

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

  const entries = body.result.blockIds.map(id => {
    const blockInfo = body.recordMap.block[id].value;
    return {
      id,
      title: blockInfo.properties.title[0][0],
      description: blockInfo.properties[process.env.NOTION_DESCRIPTION_PROPERTY][0][0],
      publishDate: blockInfo.properties[process.env.NOTION_PUBLISH_DATE_PROPERTY][0][1][0][1].start_date
    }
  })

  return entries
}

async function render(id) {
  const { body: overview } = await got.post(`${process.env.NOTION_HOST}/api/v3/syncRecordValues`, {
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

  const contentIds = overview.recordMap.block[id].value.content

  const content = []
  let recordMap = {}
  let lastChunk
  let hasMorePageChunks = true

  while(hasMorePageChunks) {
    const cursor = lastChunk && lastChunk.cursor || ({ stack: [] })

    const {body: chunk} = await got.post(`${process.env.NOTION_HOST}${process.env.NOTION_CONTENT_PATH}`, {
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

  return renderNotionPage(content);
}

exports.getAllIds = getAllIds;
exports.render = render;