import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { SubHeaderBlock } from "../notion/models/notion-blocks";

export class SubHeader implements BlockVisitable {
  constructor(private block: SubHeaderBlock) {
  }

  public get text() {
    return this.block.heading_2.rich_text[0].type === "text" ? this.block.heading_2.rich_text[0].text.content : ''
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitSubHeader(this);
  }
}
