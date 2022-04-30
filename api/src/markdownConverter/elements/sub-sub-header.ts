import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { SubSubHeaderBlock } from "../notion/models/notion-blocks";

export class SubSubHeader implements BlockVisitable {
  constructor(private block: SubSubHeaderBlock) {
  }

  public get text() {
    return this.block.heading_3.rich_text[0].type === "text" ? this.block.heading_3.rich_text[0].text.content : ''
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitSubSubHeader(this);
  }
}
