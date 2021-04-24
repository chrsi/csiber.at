import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { GeneralBlock, NotionBlock } from "../notion/models/notion-blocks";
import { createTextElement } from "../utils/textElementParser";
import { TextElement } from "../models/textElement";
import { BlockTypes } from "../notion/models";

export class BulletedList implements BlockVisitable {
  constructor(private block: GeneralBlock) {
  }

  public get text(): TextElement[] {
    return this.block.properties.title.map(createTextElement)
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitBulletedList(this);
  }
}