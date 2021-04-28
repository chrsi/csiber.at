import React from "react";
import { useTheme } from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";


const PrismCodeRenderer = (props) => {
  const { palette } = useTheme();

  const {node, inline, className, children, ...remainingProps} = props;
  const match = /language-(\w+)/.exec(className || '')
  const language = match[1].toLowerCase();

  // get rid of the trailing empty line.
  const code = String(children).replace(/\n$/, '');

  return !inline && match ? (
    <SyntaxHighlighter style={tomorrow} 
                       language={language}
                       showLineNumbers
                       customStyle={{ backgroundColor: palette.background.paper }}
                       children={code}
                       {...remainingProps} />
  ) : (
    <code className={className} {...props} />
  )
}

export default PrismCodeRenderer;