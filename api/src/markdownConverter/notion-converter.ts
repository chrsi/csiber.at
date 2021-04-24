import { BlockVisitable } from "./block-visitable";
import { MarkdownConverter } from "./markdown-converter";

export const convert = (source: BlockVisitable[]): string => {
  const output: string[] = [];

  const markdownConverter = new MarkdownConverter();

  source.forEach(block => {
    output.push(block.accept(markdownConverter))
  })

  // markdown blocks need to be separated by two line breaks
  return output.join('\n\n');
}