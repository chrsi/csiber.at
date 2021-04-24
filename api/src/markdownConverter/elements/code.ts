import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { CodeBlock } from "../notion/models/notion-blocks";

export class Code implements BlockVisitable {
  constructor(private block: CodeBlock) {
  }

  public get text() {
    return this.block.properties.title[0][0]
  }

  public get language() {
    return this.block.properties.language[0][0]
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitCode(this);
  }
}