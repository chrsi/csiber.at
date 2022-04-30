import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { ImageBlock, ImageBlockExternal, ImageBlockFile } from "../notion/models/notion-blocks";
import { RichTextBlock, TextBlock } from "../notion/models/rich-text-block";

export class Image implements BlockVisitable {
  constructor(private block: ImageBlock) {
  }

  public get title() {
    return this.block.image.caption.filter(this.isText).map(elem => elem.text.content).join('');
  }

  public get src() {
    return this.isExternal(this.block.image) ? this.block.image.external.url : null;
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitImage(this);
  }

  private isExternal(block: ImageBlockExternal | ImageBlockFile): block is ImageBlockExternal {
    return block.type === "external"
  }

  private isText(block: RichTextBlock): block is TextBlock {
    if (block === undefined) return false;
    return block.type === "text"
  }
}
