import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { lioshi } from "react-syntax-highlighter/dist/esm/styles/hljs";

function useEffectView() {
  SyntaxHighlighter.registerLanguage("javascript", js);
  var basicHookString =
    "useEffect(() => {\n" +
    "      // code to be executed\n" +
    "      // axios.get('/user?name=donpiano')\n" +
    "  return () => {\n" +
    "     // cleanup function (unsubscribe or unmount)\n" +
    "  }, [modifiedVariable]);";
  return (
    <Container>
      <Typography>
        I'ts basicly comopnentDidMount for function components. Function will
        run the code every time component get's re-rendered (if we leave second
        parameter empty), or variables passed to second parameter gets changed.
        <Box>
          <SyntaxHighlighter style={lioshi}>
            {basicHookString}
          </SyntaxHighlighter>
        </Box>
      </Typography>
    </Container>
  );
}

export default useEffectView;
