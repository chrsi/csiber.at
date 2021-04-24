import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { ImageBlock } from "../notion/models/notion-blocks";

export class Image implements BlockVisitable {
  constructor(private block: ImageBlock) {
  }

  public get title() {
    const caption = this.block.properties.caption;
    return caption ? caption[0][0] : 'Unknown caption'
  }

  public get src() {
    return this.block.properties.source[0][0]
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitImage(this);
  }
}