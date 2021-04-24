import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { GeneralBlock } from "../notion/models/notion-blocks";
import { createTextElement } from "../utils/textElementParser";
import { TextElement } from "../models/textElement";

export class Quote implements BlockVisitable {
  constructor(private block: GeneralBlock) {
  }

  public get text(): TextElement[][] {
    let result: TextElement[][] = [];
    let currentLine = 0

    for(const title of this.block.properties.title) {
      const lines = title[0].split('\n')
      for(let i = 0; i < lines.length; i++) {
        if (result[currentLine + i] == undefined) {
          result[currentLine + i] = []
        }

        result[currentLine + i].push(createTextElement([ lines[i], title[1] ] as any))
      }
      currentLine += lines.length-1
    }
    return result;
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitQuote(this);
  }
}