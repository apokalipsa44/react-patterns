import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { lioshi } from "react-syntax-highlighter/dist/esm/styles/hljs";

function hooksDescription(props) {
  const { basicHookCode, basicHookDescription } = props;
  SyntaxHighlighter.registerLanguage("javascript", js);

  return (
    <Container>
      <Typography>
        {basicHookDescription}
        <Box>
          <SyntaxHighlighter style={lioshi}>{basicHookCode}</SyntaxHighlighter>
        </Box>
      </Typography>
    </Container>
  );
}

export default hooksDescription;
