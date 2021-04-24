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
        properties: {
          title: [
            [
              'Test',
              [
                [ 'b' ],
                [ 'a', 'Some Link'],
              ]
            ]
          ]
        },
        type: BlockTypes.Text
      })

      const result = converter.visitText(text);
      expect(result).toContain('[**Test**](Some Link)')
    })

    it('collapses formatted link elements', () => {
      const text = new Text({
        properties: {
          title: [
            [
              'Some',
              [
                [ 'a', 'url' ],
              ]
            ],
            [
              'Link',
              [
                [ 'b' ],
                [ 'a', 'url'],
              ]
            ]
          ]
        },
        type: BlockTypes.Text
      })

      const result = converter.visitText(text);
      expect(result).toContain('[Some **Link**](url)')
    })

    it('doesn\'t include trailing and leading whitespaces when formatting', () => {
        const text = new Text({
          properties: {
            title: [
              [
                ' bold text ',
                [
                  [ 'b' ]
                ]
              ]
            ]
          },
          type: BlockTypes.Text
        })

        const result = converter.visitText(text);
        expect(result).toBe(' **bold text** ');
      })

      it('creates bold formatted text', () => {
        const text = new Text({
          properties: {
            title: [
              [
                'bold text',
                [
                  [ 'b' ]
                ]
              ]
            ]
          },
          type: BlockTypes.Text
        })

        const result = converter.visitText(text);
        expect(result).toBe('**bold text**');
      })

      it('creates italic formatted text', () => {
        const text = new Text({
          properties: {
            title: [
              [
                'bold text',
                [
                  [ 'i' ]
                ]
              ]
            ]
          },
          type: BlockTypes.Text
        })

        const result = converter.visitText(text);
        expect(result).toBe('*bold text*');
      })

      it('supports text with multiple formats', () => {
        const text = new Text({
          properties: {
            title: [
              [
                'bold text',
                [
                  [ 'i' ],
                  [ 'b' ]
                ]
              ]
            ]
          },
          type: BlockTypes.Text
        })

        const result = converter.visitText(text);
        expect(result).toBe('***bold text***');
      })

      it('appends two spaces when breaking a line', () => {
        const text = new Text({
          properties: {
            title: [
              [
                'some text\nwith line-break',
              ]
            ]
          },
          type: BlockTypes.Text
        })

        const result = converter.visitText(text);
        expect(result).toBe('some text  \nwith line-break');
    })
  })
})