import { Image } from "./image"

/**
 * Represents images hosted on unsplash
 */
export class UnsplashImage implements Image {
  constructor(private url: string) {}

  public get smallImage(): string {
    return this.url + "&w=600";
  }

  public get largeImage(): string {
    return this.url + "&w=1000";
  }
}