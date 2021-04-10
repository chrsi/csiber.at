const got = require('got');

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

exports.getAllIds = getAllIds;