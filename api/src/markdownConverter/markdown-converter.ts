import { BulletedList } from "./elements/bulleted-list";
import { Header } from "./elements/header";
import { Text } from "./elements/text";
import { SubHeader } from "./elements/sub-header";
import { SubSubHeader } from "./elements/sub-sub-header";
import { NumberedList } from "./elements/numbered-list";
import { Image } from "./elements/image";
import { ToDo } from "./elements/todo";
import { Code } from "./elements/code";
import { Callout } from "./elements/callout";
import { Quote } from "./elements/quote";
import { Divider } from "./elements/divider";
import { Equation } from "./elements/equation";
import { Video } from "./elements/video";
import { Embed } from "./elements/embed";
import { TextElement } from "./models/textElement";

export class MarkdownConverter {
  public visitHeader(header: Header): string {
    return `# ${header.text}`
  }

  public visitSubHeader(subHeader: SubHeader): string {
    return `## ${subHeader.text}`
  }

  public visitSubSubHeader(subSubHeader: SubSubHeader): string {
    return `## ${subSubHeader.text}`
  }

  public visitText(text: Text): string {
    return text.text.map(t => this.formatText(t)).join('')
  }

  public visitBulletedList(bulletedList: BulletedList): string {
    const text = bulletedList.text
      .map(t => this.formatText(t))
      .join('')
    return '* ' + text
  }

  public visitNumberedList(numberedList: NumberedList): string {
    const text = numberedList.text
      .map(t => this.formatText(t))
      .join('')
    return '1. ' + text;
  }

  public visitTodo(todo: ToDo): string {
    const checked = todo.checked ? 'x' : ' '
    const text = todo.text
      .map(t => t.text) // formatting isn't supported for checkboxes in markdown.
      .join('')
    return `- [${checked}] ${text}` 
  }

  public visitCode(code: Code): string {
    return `\`\`\`${code.language}\n${code.text}\n\`\`\``
  }

  public visitCallout(callout: Callout): string {
    // TODO: support for callouts
    return '?> ' + callout.text
  }

  public visitQuote(quote: Quote): string {
    return quote.text.map(t => {
      const line = t.map(this.formatText).join('')
      return `> ${line}  `
    }).join('\n')
  }

  public visitDivider(divider: Divider): string {
    return "\n---\n"
  }

  public visitImage(image: Image): string {
    return `![${image.title}](${image.src})`
  }

  public visitEquation(equation: Equation): string {
    // TODO: support for equation
    return ''
  }

  public visitEmbed(embed: Embed): string {
    // TODO: support for embed
    return ''
  }

  public visitVideo(video: Video): string {
    // TODO: support for video
    return ''
  }

  private formatText(textElement: TextElement): string {
    let result = textElement.text;
    if(textElement.formattingOptions?.bold) {
      result = result.replace(/^(\s*)(.*?)(\s*)$/, '$1**$2**$3')
    }

    if(textElement.formattingOptions?.italic) {
      result = result.replace(/^(\s*)(.*?)(\s*)$/, '$1*$2*$3')
    }

    result = result.replace('\n', '  \n');

    if(textElement.formattingOptions?.link) {
      result = `[${result}](${textElement.formattingOptions.link})`
    }
    return result
    // TODO: support for underline and strikethrough
  }
}