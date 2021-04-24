import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { GeneralBlock } from "../notion/models/notion-blocks";
import { createTextElement } from "../utils/textElementParser";
import { TextElement } from "../models/textElement";

export class NumberedList implements BlockVisitable {
  constructor(private block: GeneralBlock) {
  }

  public get text(): TextElement[] {
    return this.block.properties.title.map(createTextElement)
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitNumberedList(this);
  }
}