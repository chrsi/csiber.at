import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { DividerBlock } from "../notion/models/notion-blocks";

export class Divider implements BlockVisitable {
  constructor(private block: DividerBlock) {
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitDivider(this);
  }
}