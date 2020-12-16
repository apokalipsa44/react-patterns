import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function HooksDescription(props) {
  const { basicHookCode, basicHookDescription } = props;

  return (
    <>
      <Typography>{basicHookDescription}</Typography>
      <Box>
        <SyntaxHighlighter style={atomDark} language="jsx">
          {basicHookCode}
        </SyntaxHighlighter>
      </Box>
    </>
  );
}

export default HooksDescription;
