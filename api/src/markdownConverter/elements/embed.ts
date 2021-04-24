import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { BookmarkBlock } from "../notion/models/notion-blocks";

export class Embed implements BlockVisitable {
  constructor(private block: BookmarkBlock) {
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitEmbed(this);
  }
}