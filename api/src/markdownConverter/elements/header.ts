import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { GeneralBlock } from "../notion/models/notion-blocks";

export class Header implements BlockVisitable {
  constructor(private block: GeneralBlock) {
  }

  public get text() {
    return this.block.properties.title[0][0]
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitHeader(this);
  }
}