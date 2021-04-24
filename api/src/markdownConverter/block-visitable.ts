import { MarkdownConverter } from "./markdown-converter";

export interface BlockVisitable {
  accept(markdownConverter: MarkdownConverter): string;
}