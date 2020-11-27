import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function hooksDescription(props) {
  const { basicHookCode, basicHookDescription } = props;
 
  return (
    <Container>
      <Typography>
        {basicHookDescription}
        <Box>
          <SyntaxHighlighter style={darcula} language="jsx">{basicHookCode}</SyntaxHighlighter>
        </Box>
      </Typography>
    </Container>
  );
}

export default hooksDescription;
