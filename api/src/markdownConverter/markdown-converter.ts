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
import { TextElement } from "./text-element";

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
    return this.convertTextElements(text.text);
  }

  public convertTextElements(textElements: TextElement[]): string {
    const collapsedElements = this.collapseLinks(textElements);
    const formattedElements = collapsedElements.map(t => this.formatText(t));
    return formattedElements.map(t => this.formatLink(t).text).join('');
  }

  public visitBulletedList(bulletedList: BulletedList): string {
    const text = this.convertTextElements(bulletedList.text)
    return '* ' + text
  }

  public visitNumberedList(numberedList: NumberedList): string {
    const text = this.convertTextElements(numberedList.text)
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
      const line = this.convertTextElements(t)
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

  private formatText(textElement: TextElement): TextElement {
    if(textElement.formattingOptions?.bold) {
      textElement.text = textElement.text.replace(/^(\s*)(.*?)(\s*)$/, '$1**$2**$3')
    }

    if(textElement.formattingOptions?.italic) {
      textElement.text = textElement.text.replace(/^(\s*)(.*?)(\s*)$/, '$1*$2*$3')
    }

    textElement.text = textElement.text.replace('\n', '  \n');
    return textElement;
    // TODO: support for underline and strikethrough
  }

  private formatLink(textElement: TextElement): TextElement {
    if(textElement.formattingOptions?.link) {
      textElement.text = `[${textElement.text}](${textElement.formattingOptions.link})`
    }
    return textElement;
  }

  private collapseLinks(formattedElements: TextElement[]) {
    const result = [];
    for (let i = 0; i < formattedElements.length; ++i) {
      if (i != 0) {
        const element = formattedElements;
        if (element[i].formattingOptions?.link != null &&
          element[i - 1].formattingOptions?.link == element[i].formattingOptions?.link) {
          result[result.length - 1].text += element[i].text;
        } else {
          result.push(element[i])
        }
      } else {
        result.push(formattedElements[i]);
      }
    }
    return result;
  }
}
