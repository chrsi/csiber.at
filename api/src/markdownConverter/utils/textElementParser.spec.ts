import { TextBlock } from "../notion/models"
import { createTextElement } from "./textElementParser"

describe('Text Element Parser', () => {
  it('properly parses unformatted text', () => {
    const text: TextBlock = [
      'some unformatted text',
    ]
    const textElement = createTextElement(text)
    expect(textElement.text).toBe('some unformatted text')
    expect(textElement.formattingOptions).toBeUndefined()
  })

  it('properly parses links', () => {
    const linkElement: TextBlock = [
      'linkTitle',
      [
        [ 'a', 'link-url' ]
      ]
    ]
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
    const boldElement: TextBlock = [
      'bold text',
      [
        [ 'b' ]
      ]
    ]
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
    const italicElement: TextBlock = [
      'italic text',
      [
        [ 'i' ]
      ]
    ]
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
    const underlinedElement: TextBlock = [
      'underlined text',
      [
        [ '_' ]
      ]
    ]
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
    const strikedthroughElement: TextBlock = [
      'strikedthrough text',
      [
        [ 's' ]
      ]
    ]
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