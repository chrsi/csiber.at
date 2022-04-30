import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { createTextElement } from "../utils/textElementParser";
import { RichTextBlock, TextBlock } from "../notion/models/rich-text-block";
import { TextElement } from "../text-element";
import { NumberedListBlock } from "../notion/models/notion-blocks";

export class NumberedList implements BlockVisitable {
  constructor(private block: NumberedListBlock) {
  }

  public get text(): TextElement[] {
    return this.block.numbered_list_item.rich_text.filter(this.isTextBlock).map(createTextElement)
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitNumberedList(this);
  }

  private isTextBlock(block: RichTextBlock): block is TextBlock {
    return block.type === "text"
  }
}
