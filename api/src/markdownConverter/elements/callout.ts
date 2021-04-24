import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { CalloutBlock } from "../notion/models/notion-blocks";

export class Callout implements BlockVisitable {
  constructor(private block: CalloutBlock) {
  }

  public get text() {
    return this.block.properties.title[0][0]
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitCallout(this);
  }
}