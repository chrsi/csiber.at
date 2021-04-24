import { FormattingOptions } from "../models/formattingOptions";
import { TextElement } from "../models/textElement";
import { Format, TextBlock } from "../notion/models";

const formatterMap: { [ key in Format ]: (elem: FormattingOptions) => void } = {
  'b': format => format.bold = true,
  'i': format => format.italic = true,
  's': format => format.strikethrough = true,
  '_': format => format.underline = true,
}

export function createTextElement(textBlock: TextBlock): TextElement {
  const [text, formatOptions] = textBlock
  const result: TextElement = { text };

  if (formatOptions) {
    result.formattingOptions = {
      bold: false,
      italic: false,
      strikethrough: false,
      underline: false
    }

    formatOptions.forEach(([ format, additionalFormatOption ]) => {
      if (format === 'a') {
        result.formattingOptions!.link = additionalFormatOption
      } else {
        const formatting = formatterMap[format];
        if (formatting) {
          formatting(result.formattingOptions!);
        }
      }
    })
  }

  return result;
}