import { Text } from './elements/text'
import { MarkdownConverter } from './markdown-converter';
import { BlockTypes } from './notion/models'

describe('Markdown Converter', () => {
  let converter: MarkdownConverter;

  beforeEach(() => {
    converter = new MarkdownConverter();
  })

  describe('Converting Text', () => {
    it('supports bold formatted links', () => {
      const text = new Text({
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'Test',
                link: {
                  url: 'Some Link'
                }
              },
              annotations: {
                bold: true,
                italic: false,
                code: false,
                strikethrough: false,
                underline: false
              }
            }
          ]
        }
      })

      const result = converter.visitText(text);
      expect(result).toContain('[**Test**](Some Link)')
    })

    it('collapses formatted link elements', () => {
      const text = new Text({
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'Some',
                link: {
                  url: 'url'
                }
              },
              annotations: {
                bold: false,
                italic: false,
                code: false,
                strikethrough: false,
                underline: false
              }
            },
            {
              type: 'text',
              text: {
                content: ' Link',
                link: {
                  url: 'url'
                }
              },
              annotations: {
                bold: true,
                italic: false,
                code: false,
                strikethrough: false,
                underline: false
              }
            }
          ]
        }
      })

      const result = converter.visitText(text);
      expect(result).toContain('[Some **Link**](url)')
    })

    it('doesn\'t include trailing and leading whitespaces when formatting', () => {
        const text = new Text({
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: ' bold text ',
                  link: null
                },
                annotations: {
                  bold: true,
                  italic: false,
                  code: false,
                  strikethrough: false,
                  underline: false
                }
              }
            ]
          }
        })

        const result = converter.visitText(text);
        expect(result).toBe(' **bold text** ');
      })

      it('creates bold formatted text', () => {
        const text = new Text({
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'bold text',
                  link: null
                },
                annotations: {
                  bold: true,
                  italic: false,
                  code: false,
                  strikethrough: false,
                  underline: false
                }
              }
            ]
          }
        })

        const result = converter.visitText(text);
        expect(result).toBe('**bold text**');
      })

      it('creates italic formatted text', () => {
        const text = new Text({
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'bold text',
                  link: null
                },
                annotations: {
                  bold: false,
                  italic: true,
                  code: false,
                  strikethrough: false,
                  underline: false
                }
              }
            ]
          }
        })

        const result = converter.visitText(text);
        expect(result).toBe('*bold text*');
      })

      it('supports text with multiple formats', () => {
        const text = new Text({paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'bold text',
                link: null
              },
              annotations: {
                bold: true,
                italic: true,
                code: false,
                strikethrough: false,
                underline: false
              }
            }
          ]
        }
        })

        const result = converter.visitText(text);
        expect(result).toBe('***bold text***');
      })

      it('appends two spaces when breaking a line', () => {
        const text = new Text({
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'some text\nwith line-break',
                  link: null
                },
                annotations: {
                  bold: false,
                  italic: false,
                  code: false,
                  strikethrough: false,
                  underline: false
                }
              }
            ]
          }
        })

        const result = converter.visitText(text);
        expect(result).toBe('some text  \nwith line-break');
    })
  })
})
