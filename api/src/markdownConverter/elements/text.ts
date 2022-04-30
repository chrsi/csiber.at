import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { ParagraphBlock } from "../notion/models/paragraph-block";
import { RichTextBlock, TextBlock } from "../notion/models/rich-text-block";
import { createTextElement } from "../utils/textElementParser";
import { TextElement } from "../text-element";

export class Text implements BlockVisitable {
  constructor(private block: ParagraphBlock) {
  }

  public get text(): TextElement[] {
    return this.block.paragraph.rich_text.filter(this.isTextBlock).map(createTextElement);
  }

  public accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitText(this);
  }

  private isTextBlock(block: RichTextBlock): block is TextBlock {
    return block.type === "text"
  }
}

