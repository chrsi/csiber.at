import { RichTextBlock } from "./rich-text-block";

export interface ParagraphBlock {
  paragraph: {
    rich_text: RichTextBlock[]
  }
}
