import { Image } from "../service/notion-gateway/models/image";

export interface BlogPost {
  id: string,
  title: string,
  description: string | undefined,
  publishDate: string | undefined,
  image: string | undefined
}