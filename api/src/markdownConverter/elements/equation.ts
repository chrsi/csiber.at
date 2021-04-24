import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { GeneralBlock } from "../notion/models/notion-blocks";

export class Equation implements BlockVisitable {
  constructor(private block: GeneralBlock) {
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitEquation(this);
  }
}