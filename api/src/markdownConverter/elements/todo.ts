import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { TodoBlock } from "../notion/models/notion-blocks";
import { createTextElement } from "../utils/textElementParser";
import { TextElement } from "../models/textElement";

const CHECKED_TEXT = 'Yes';

export class ToDo implements BlockVisitable {
  constructor(private block: TodoBlock) {
  }

  public get text(): TextElement[] {
    return this.block.properties.title.map(createTextElement)
  }

  public get checked() {
    const checkedBlock = this.block.properties.checked;
    return checkedBlock && checkedBlock[0][0] === CHECKED_TEXT
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitTodo(this);
  }
}