export declare type RichTextBlock = TextBlock | MentionBlock | EquationBlock

export declare type TextBlock = {
    type: "text",
    text: {
      content: string,
      link: {
          url: string
      } | null
    },
    annotations: {
      bold: boolean,
      italic: boolean,
      strikethrough: boolean,
      underline: boolean,
      code: boolean
    }
  }

  export declare type MentionBlock = {
    type: "mention"
  }

  export declare type EquationBlock = {
    type: "equation"
  }
