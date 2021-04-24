import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { EmptyBlock, GeneralBlock } from "../notion/models/notion-blocks";
import { createTextElement } from "../utils/textElementParser";
import { TextElement } from "../models/textElement";

export class Text implements BlockVisitable {
  constructor(private block: GeneralBlock | EmptyBlock ) {
  }

  public get text(): TextElement[] {
    if (this.isEmptyBlock(this.block)) {
      return [
        { text: '' }
      ]
    } else {
      return this.block.properties.title.map(createTextElement)
    }
  }

  public accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitText(this);
  }

  private isEmptyBlock(block: GeneralBlock | EmptyBlock): block is EmptyBlock {
    return !(block as GeneralBlock).properties
  }
}