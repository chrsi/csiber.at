import { BlockTypes } from "./models/block-types";
import { BlockVisitable } from "../block-visitable";
import { BulletedList } from "../elements/bulleted-list";
import { Header } from "../elements/header";
import { Text } from "../elements/text";
import { SubHeader } from "../elements/sub-header";
import { SubSubHeader } from "../elements/sub-sub-header";
import { NumberedList } from "../elements/numbered-list";
import { ToDo } from "../elements/todo";
import { Code } from "../elements/code";
import { Callout } from "../elements/callout";
import { Quote } from "../elements/quote";
import { Divider } from "../elements/divider";
import { Image } from "../elements/image";
import { Equation } from "../elements/equation";
import { Embed } from "../elements/embed";
import { Video } from "../elements/video";
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

export const parseNotion = (res: ListBlockChildrenResponse): BlockVisitable[] => {
  const content = res.results;

  return content.map(block => {
    if ("type" in block) {} else {throw new Error()}

    switch(block.type) {
      case BlockTypes.Text:
        return new Text(block)
      case BlockTypes.NumberedList:
        return new NumberedList(block)
      case BlockTypes.BulletedList:
        return new BulletedList(block)
      case BlockTypes.Header:
        return new Header(block)
      case BlockTypes.SubHeader:
        return new SubHeader(block)
      case BlockTypes.SubSubHeader:
        return new SubSubHeader(block)
      case BlockTypes.ToDo:
        return new ToDo(block)
      case BlockTypes.Code:
        return new Code(block)
      case BlockTypes.Callout:
        return new Callout(block)
      case BlockTypes.Quote:
        return new Quote(block)
      case BlockTypes.Divider:
        return new Divider(block)
      case BlockTypes.Image:
        return new Image(block)
      case BlockTypes.Equation:
        return new Equation(block)
      case BlockTypes.Embed:
        return new Embed(block)
      case BlockTypes.Video:
        return new Video(block)
      default:
        return null;
    }
  }).filter(notNull)
}

function notNull<TValue>(value: TValue | null): value is TValue {
  return value !== null;
}
