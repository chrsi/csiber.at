import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { HeaderBlock } from "../notion/models/notion-blocks";

export class Header implements BlockVisitable {
  constructor(private block: HeaderBlock) {
  }

  public get text() {
    return this.block.heading_1.rich_text[0].type === "text" ? this.block.heading_1.rich_text[0].text.content : ''
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitHeader(this);
  }
}
