import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { QuoteBlock } from "../notion/models/notion-blocks";
import { createTextElement } from "../utils/textElementParser";
import { RichTextBlock, TextBlock } from "../notion/models/rich-text-block";
import { TextElement } from "../text-element";

export class Quote implements BlockVisitable {
  constructor(private block: QuoteBlock) {
  }

  public get text(): TextElement[][] {
    let result: TextElement[][] = [];
    let currentLine = 0

    for(const textElement of this.block.quote.rich_text.filter(this.isTextBlock)) {
      const lines = textElement.text.content.split('\n')
      for(let i = 0; i < lines.length; i++) {
        if (result[currentLine + i] == undefined) {
          result[currentLine + i] = []
        }

        result[currentLine + i].push(createTextElement({ text: { content: lines[i], link: null }, annotations: textElement.annotations, type: textElement.type }))
      }
      currentLine += lines.length-1
    }
    return result;
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitQuote(this);
  }

  private isTextBlock(block: RichTextBlock): block is TextBlock {
    return block.type === "text"
  }
}
