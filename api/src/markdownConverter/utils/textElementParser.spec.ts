import { TextBlock } from "../notion/models/rich-text-block"
import { createTextElement } from "./textElementParser"

describe('Text Element Parser', () => {
  it('properly parses unformatted text', () => {
    const text: TextBlock = {
      type: 'text',
      text: {
        content: 'some unformatted text',
        link: null
      },
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      }
    }

    const textElement = createTextElement(text)
    expect(textElement.text).toBe('some unformatted text')
    expect(textElement.formattingOptions).toEqual({
      bold: false,
      italic: false,
      link: undefined,
      strikethrough: false,
      underline: false
    })
  })

  it('properly parses links', () => {
    const linkElement: TextBlock = {
      type: 'text',
      text: {
        content: 'linkTitle',
        link: {
          url: 'link-url'
        }
      },
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      }
    }

    const textElement = createTextElement(linkElement)
    expect(textElement.formattingOptions).toEqual({
      bold: false,
      italic: false,
      underline: false,
      strikethrough: false,
      link: 'link-url'
    })
  })

  it('properly parses bold text', () => {
    const boldElement: TextBlock = {
      type: 'text',
      text: {
        content: 'bold text',
        link: null
      },
      annotations: {
        bold: true,
        code: false,
        italic: false,
        strikethrough: false,
        underline: false
      }
    }

    const textElement = createTextElement(boldElement)
    expect(textElement.formattingOptions).toEqual({
      bold: true,
      italic: false,
      underline: false,
      strikethrough: false,
      link: undefined
    })
  })

  it('properly parses italic text', () => {
    const italicElement: TextBlock = {
      type: 'text',
      text: {
        content: 'italic text',
        link: null
      },
      annotations: {
        bold: false,
        code: false,
        italic: true,
        strikethrough: false,
        underline: false
      }
    }

    const textElement = createTextElement(italicElement)
    expect(textElement.formattingOptions).toEqual({
      bold: false,
      italic: true,
      underline: false,
      strikethrough: false,
      link: undefined
    })
  })

  it('properly parses underlined text', () => {
    const underlinedElement: TextBlock = {
      type: 'text',
      text: {
        content: 'underlined text',
        link: null
      },
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: false,
        underline: true
      }
    }
    
    const textElement = createTextElement(underlinedElement)
    expect(textElement.formattingOptions).toEqual({
      bold: false,
      italic: false,
      underline: true,
      strikethrough: false,
      link: undefined
    })
  })

  it('properly parses strikedthrough text', () => {
    const strikedthroughElement: TextBlock = {
      type: 'text',
      text: {
        content: 'strikedthrough text',
        link: null
      },
      annotations: {
        bold: false,
        code: false,
        italic: false,
        strikethrough: true,
        underline: false
      }
    }
    
    const textElement = createTextElement(strikedthroughElement)
    expect(textElement.formattingOptions).toEqual({
      bold: false,
      italic: false,
      underline: false,
      strikethrough: true,
      link: undefined
    })
  })
})
