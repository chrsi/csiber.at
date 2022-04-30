import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { createTextElement } from "../utils/textElementParser";
import { TextElement } from "../text-element";
import { RichTextBlock, TextBlock } from "../notion/models/rich-text-block";
import { BulletedListBlock } from "../notion/models/notion-blocks";

export class BulletedList implements BlockVisitable {
  constructor(private block: BulletedListBlock) {
  }

  public get text(): TextElement[] {
    return this.block.bulleted_list_item.rich_text.filter(this.isTextBlock).map(createTextElement)
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitBulletedList(this);
  }

  private isTextBlock(block: RichTextBlock): block is TextBlock {
    return block.type === "text"
  }
}
