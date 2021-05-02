import { Image } from "./image"

/**
 * Represents a generic image where the hoster isn't specificly supported.
 * It serves as a image fallback where hoster specific functionality (eg. like resizing) isn't supported.
 */
export class GenericImage implements Image {
  constructor(private url: string) {}

  public get smallImage(): string {
    return this.url;
  }

  public get largeImage(): string {
    return this.url;
  }
}