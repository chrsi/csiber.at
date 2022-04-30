import { text } from "stream/consumers";
import { TextElement } from "../text-element";
import { Format } from "../notion/models";
import { RichTextBlock, TextBlock } from "../notion/models/rich-text-block";

export function createTextElement(textBlock: TextBlock): TextElement {
  return {
    text: textBlock.text.content,
    formattingOptions: {
      bold: textBlock.annotations.bold,
      italic: textBlock.annotations.italic,
      strikethrough: textBlock.annotations.strikethrough,
      underline: textBlock.annotations.underline,
      link: textBlock.text.link?.url
    }
  }
}
