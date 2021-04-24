import { BlockTypes } from "../notion/models/block-types"
import { FormattingOptions } from "../models/formattingOptions";
import { Quote } from "./quote"

describe('quote', () => {
  it('should support formatted multiline quotes', () => {
    const quote = new Quote({
      type: BlockTypes.Quote,
      properties: {
        title: [
            [
                "This "
            ],
            [
                "is",
                [
                    [
                        "b"
                    ]
                ]
            ],
            [
                " a \nMultiline "
            ],
            [
                "Quote\nin coursive",
                [
                    [
                        "i"
                    ]
                ]
            ]
        ]
      },
    });

    expect(quote.text).toEqual([
      [
        {
          text: 'This ',
        },
        {
          text: 'is',
          formattingOptions: createFormattingOptions(true, false)
        },
        {
          text: ' a ',
        }
      ],
      [
        {
          text: 'Multiline '
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
        }
      ]
    ])
  })
})

function createFormattingOptions(bold: boolean, italic: boolean): FormattingOptions {
  return {
    bold,
    italic,
    underline: false,
    strikethrough: false
  }
}
