import { BlockTypes } from "./block-types";
import { RichTextBlock } from "./rich-text-block";

export type BulletedListBlock = {
  type: 'bulleted_list_item',
  bulleted_list_item: { rich_text: RichTextBlock[] }
}

export type NumberedListBlock = {
  type: 'numbered_list_item',
  numbered_list_item: { rich_text: RichTextBlock[] }
}

export type HeaderBlock = {
  type: 'heading_1',
  heading_1: { rich_text: RichTextBlock[] }
}

export type SubHeaderBlock = {
  type: 'heading_2',
  heading_2: { rich_text: RichTextBlock[] }
}

export type SubSubHeaderBlock = {
  type: 'heading_3',
  heading_3: { rich_text: RichTextBlock[] }
}

export type EquationBlock = {
  type: 'equation',
}

export type QuoteBlock = {
  type: 'quote',
  quote: {
    rich_text: RichTextBlock[]
  }
}

export type DividerBlock = {
  type: "divider"
}

export type CalloutBlock = {
  type: 'callout',
  callout: {
    rich_text: RichTextBlock[]
  }
}

export type TodoBlock = {
  type: 'to_do',
  to_do: {
    rich_text: RichTextBlock[],
    checked: boolean
  }
}

export type CodeBlock = {
  type: 'code',
  code: {
    rich_text: RichTextBlock[],
    language: string
  }
}

export type ImageBlock = {
  type: "image",
  image: ImageBlockExternal | ImageBlockFile
}

export type ImageBlockExternal = {
  caption: RichTextBlock[],
  type: "external",
  external: {
    url: string
  }
}

export type ImageBlockFile = {
  caption: RichTextBlock[],
  type: "file"
}

export type VideoBlock = {
  type: "video",
}

export type EmbedBlock = {
  type: "embed",
}

export type EmptyBlock = {
  type: BlockTypes.Text
}
