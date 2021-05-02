import { Image } from "./image";

export interface NotionBlogPost {
  id: string,
  title: string,
  description: string | undefined,
  publishDate: string | undefined,
  image: Image | undefined
}