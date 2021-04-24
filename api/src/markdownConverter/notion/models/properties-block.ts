import { TextBlock } from ".";

export interface TextPropertiesBlock {
  title: Array<TextBlock>,
}

export interface ImagePropertiesBlock {
  source: [ [ string ] ],
  caption: Array<TextBlock>
}

export interface ToDoPropertiesBlock {
  title: Array<TextBlock>,
  checked?: [ [ 'Yes' ]]
}

export interface CodePropertiesBlock {
  title: Array<TextBlock>
  language: [ [ string ] ]
}

export interface BookmarkPropertiesBlock {
  link: [ [ string ] ]
  title: Array<TextBlock>
  description: Array<TextBlock>
}

export interface VideoPropertiesBlock {
  source: [ [ string ] ]
}