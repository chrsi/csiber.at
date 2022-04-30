import { BlockTypes } from "../notion/models/block-types"
import { Quote } from "./quote"

describe('quote', () => {
  it('should support formatted multiline quotes', () => {
    const quote = new Quote({
      type: BlockTypes.Quote,
      quote: {
        rich_text: [
            { 
              type: 'text',
              text: {
                content: "This ",
                link: null
              },
              annotations: {
                bold: false,
                strikethrough: false,
                italic: false,
                code: false,
                underline: false,
              }
            },
            {
              type: 'text',
              text: {
                content: "is",
                link: null
              },
              annotations: {
                bold: true,
                strikethrough: false,
                italic: false,
                code: false,
                underline: false,
              }
            },
            {
              type: 'text',
              text: {
                content: " a \nMultiline ",
                link: null
              },
              annotations: {
                bold: false,
                strikethrough: false,
                italic: false,
                code: false,
                underline: false,
              }
            },
            {
              type: 'text',
              text: {
                content: "Quote\nin coursive",
                link: null
              },
              annotations: {
                bold: false,
                strikethrough: false,
                italic: true,
                code: false,
                underline: false,
              }
            },
            {
              type: 'text',
              text: {
                content: "",
                link: null
              },
              annotations: {
                bold: false,
                strikethrough: false,
                italic: true,
                code: false,
                underline: false,
              }
          }
        ]
      },
    });

    expect(quote.text).toEqual([
      [
        {
          text: 'This ',
          formattingOptions: createFormattingOptions(false, false)
        },
        {
          text: 'is',
          formattingOptions: createFormattingOptions(true, false)
        },
        {
          text: ' a ',
          formattingOptions: createFormattingOptions(false, false)
        }
      ],
      [
        {
          text: 'Multiline ',
          formattingOptions: createFormattingOptions(false, false)
        },
        {
          text: 'Quote',
          formattingOptions: createFormattingOptions(false, true)
        }
      ],
      [
        {
          text: 'in coursive',
          formattingOptions: createFormattingOptions(false, true)
        },
        {
          text: '',
          formattingOptions: createFormattingOptions(false, true)
        }
      ]
    ])
  })
})

function createFormattingOptions(bold: boolean, italic: boolean) {
  return {
    bold,
    italic,
    underline: false,
    strikethrough: false,
    link: undefined
  }
}
