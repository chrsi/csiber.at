import { convert } from "../../markdownConverter/notion-converter";
import { parseNotion } from "../../markdownConverter/notion/notion-parser";
import { BlogPost } from "../../models/blog-post";
import { Client } from "@notionhq/client"

const QUERY_PATH = '/api/v3/queryCollection'
const QURY_SPECIFIC_PATH = '/api/v3/syncRecordValues'
const CONTENT_PATH = '/api/v3/loadPageChunk'

const notion = new Client({ auth: process.env.NOTION_SECRET })

async function getAllIds(): Promise<BlogPost[]> {
  const database_id = process.env.NOTION_BLOG_DBID;
  if (database_id == null) {
    console.error('No database id defined')
    return Promise.resolve([]);
  }

  const response = await notion.databases.query({
    database_id,
    filter: {
      property: 'State',
      select: {
        equals: 'Published'
      }
    },
    sorts: [
      {
        property: 'Published',
        direction: 'descending'
      }
    ]
  });

  return response.results.filter(post => "properties" in post).map(post => {
    const title = "properties" in post && "title" in post.properties.Name ? post.properties.Name.title[0].plain_text : '';
    const description = "properties" in post && "rich_text" in post.properties.Description ? post.properties.Description['rich_text'][0]?.plain_text : '';
    const publishDate = "properties" in post && "date" in post.properties.Published ? post.properties.Published.date?.start : '';
    const image = "cover" in post && post.cover != null && "external" in post.cover ? post.cover.external.url : undefined;

    return {
        id: post.id,
        title,
        description,
        publishDate,
        image
    }
  });
}

async function render(id: string) {
  const content = await notion.blocks.children.list({
    block_id: id,
    page_size: 50,
  });
  const notionBlocks = parseNotion(content);
  return convert(notionBlocks);
}

async function getById(id: string): Promise<BlogPost | null> {
  let notionResponse
  try {
    notionResponse = await notion.pages.retrieve({ page_id: id });
  } catch (APIResponseError) {
    return null;
  }

  const post = notionResponse;
  const title = "properties" in post && "title" in post.properties.Name ? post.properties.Name.title[0].plain_text : '';
  const description = "properties" in post && "rich_text" in post.properties.Description ? post.properties.Description['rich_text'][0].plain_text : '';
  const publishDate = "properties" in post && "date" in post.properties.Published ? post.properties.Published.date?.start : '';
  const image = "cover" in post && post.cover != null && "external" in post.cover ? post.cover.external.url : undefined;

  return {
    id: post.id,
    title,
    description,
    publishDate,
    image
  }
}



export {
  getAllIds,
  getById,
  render
}
