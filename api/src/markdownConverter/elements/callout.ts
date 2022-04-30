import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { CalloutBlock } from "../notion/models/notion-blocks";

export class Callout implements BlockVisitable {
  constructor(private block: CalloutBlock) {
  }

  public get text() {
    return this.block.callout.rich_text[0].type === "text" ? this.block.callout.rich_text[0].text.content : ''
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitCallout(this);
  }
}
