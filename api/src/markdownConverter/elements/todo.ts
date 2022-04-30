import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { TodoBlock } from "../notion/models/notion-blocks";
import { createTextElement } from "../utils/textElementParser";
import { RichTextBlock, TextBlock } from "../notion/models/rich-text-block";
import { TextElement } from "../text-element";

export class ToDo implements BlockVisitable {
  constructor(private block: TodoBlock) {
  }

  public get text(): TextElement[] {
    return this.block.to_do.rich_text.filter(this.isTextBlock).map(createTextElement)
  }

  public get checked() {
    return this.block.to_do.checked;
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitTodo(this);
  }

  private isTextBlock(block: RichTextBlock): block is TextBlock {
    return block.type === "text"
  }
}
