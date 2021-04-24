import { BlockTypes } from ".";
import { TextPropertiesBlock, ToDoPropertiesBlock, CodePropertiesBlock, BookmarkPropertiesBlock, ImagePropertiesBlock } from ".";
import { VideoPropertiesBlock } from "./properties-block";

interface CalloutFormat {
  page_icon: string,
  block_color: string
}

interface ImageFormat {
  block_width: number,
  display_source: string,
  block_full_width: boolean,
  block_page_width: boolean
}

interface VideoFormat {
  block_width: number,
  display_source: string,
  block_full_width: boolean,
  block_page_width: boolean
}

export type GeneralBlock = {
  type: BlockTypes.Text |
        BlockTypes.NumberedList |
        BlockTypes.BulletedList |
        BlockTypes.Quote |
        BlockTypes.Header |
        BlockTypes.SubHeader |
        BlockTypes.SubSubHeader |
        BlockTypes.Equation,
  properties: TextPropertiesBlock,
}

export type DividerBlock = {
  type: BlockTypes.Divider
}

export type CalloutBlock = {
  type: BlockTypes.Callout,
  properties: TextPropertiesBlock
  format: CalloutFormat
}

export type TodoBlock = {
  type: BlockTypes.ToDo,
  properties: ToDoPropertiesBlock
}

export type CodeBlock = {
  type: BlockTypes.Code,
  properties: CodePropertiesBlock
}

export type ImageBlock = {
  type: BlockTypes.Image,
  properties: ImagePropertiesBlock,
  format: ImageFormat
}

export type VideoBlock = {
  type: BlockTypes.Video,
  properties: VideoPropertiesBlock,
  format: VideoFormat
}

export type BookmarkBlock = {
  type: BlockTypes.Embed,
  properties: BookmarkPropertiesBlock
}

export type EmptyBlock = {
  type: BlockTypes.Text
}

export type NotionBlock = GeneralBlock |
  CalloutBlock |
  TodoBlock |
  CodeBlock |
  ImageBlock |
  VideoBlock |
  BookmarkBlock |
  EmptyBlock |
  DividerBlock;