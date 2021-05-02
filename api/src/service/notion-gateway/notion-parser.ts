import { ConfigurationError } from "../../errors/configuration-error";
import { GenericImage } from "./models/generic-image";
import { Image } from "./models/image";
import { NotionBlogPost } from "./models/notion-blog-post";
import { UnsplashImage } from "./models/unsplash-image";

export function parseNotionQuery(body: any): NotionBlogPost[] {
  return body.result.blockIds.map((id: string) => {
    const blockInfo = body.recordMap.block[id].value;

    const title = getTitle(blockInfo)
    const description = getDescription(blockInfo)
    const image = getImage(blockInfo)
    const publishDate = getPublishDate(blockInfo)

    return { id, title, description, image, publishDate }
  })
}

export function parseNotionSpecificQuery(body: any, id: string): NotionBlogPost | null {
  const blockInfo = body.recordMap.block[id].value;
  if (blockInfo === undefined) {
    return null
  }

  const title = getTitle(blockInfo)
  const description = getDescription(blockInfo)
  const image = getImage(blockInfo)
  const publishDate = getPublishDate(blockInfo)

  return { id, title, description, image, publishDate }
}

function getImage(blockInfo: any): Image | undefined {
  return blockInfo.format?.page_cover ?
    formatImage(blockInfo.format?.page_cover) :
    undefined
}

function getTitle(blockInfo: any): string {
  return blockInfo.properties.title[0][0]
}

function getPublishDate(blockInfo: any): string | undefined {
  const dateKey = process.env.NOTION_PUBLISH_DATE_PROPERTY
  if (dateKey === undefined) {
    throw new ConfigurationError('Missing configuration for the publish date property in notion blog response')
  }
  const dateBlock = blockInfo.properties[dateKey]
  return dateBlock !== undefined ? dateBlock[0][1][0][1].start_date : undefined
}

function getDescription(blockInfo: any): string | undefined {
  const descriptionKey = process.env.NOTION_DESCRIPTION_PROPERTY
  if (descriptionKey === undefined) {
    throw new ConfigurationError('Missing configuration for the description property in notion blog response')
  }
  const descriptionBlock = blockInfo.properties[descriptionKey]
  return descriptionBlock !== undefined ? descriptionBlock[0][0] : undefined
}

function formatImage(imageUrl: string): Image {
  if (imageUrl.includes('unsplash.com')) {
    return new UnsplashImage(imageUrl);
  } else if (imageUrl.startsWith('/')) { // notion hosted images
    return new GenericImage(process.env.NOTION_HOST + imageUrl)
  } else {
    return new GenericImage(imageUrl);
  }
}