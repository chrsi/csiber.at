import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { EmbedBlock } from "../notion/models/notion-blocks";

export class Embed implements BlockVisitable {
  constructor(private block: EmbedBlock) {
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitEmbed(this);
  }
}
