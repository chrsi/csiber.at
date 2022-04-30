import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { EquationBlock } from "../notion/models/notion-blocks";

export class Equation implements BlockVisitable {
  constructor(private block: EquationBlock) {
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitEquation(this);
  }
}
