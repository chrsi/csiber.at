import { BlockVisitable } from "../block-visitable";
import { MarkdownConverter } from "../markdown-converter";
import { VideoBlock } from "../notion/models/notion-blocks";

export class Video implements BlockVisitable {
  constructor(private block: VideoBlock) {
  }

  accept(markdownConverter: MarkdownConverter): string {
    return markdownConverter.visitVideo(this);
  }
}