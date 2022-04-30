import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { CodeBlock } from "../notion/models/notion-blocks";

export class Code implements BlockVisitable {
  constructor(private block: CodeBlock) {
  }

  public get text() {
    return this.block.code.rich_text[0].type === "text" ? this.block.code.rich_text[0].text.content : ''
  }

  public get language() {
    return this.block.code.language
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitCode(this);
  }
}
