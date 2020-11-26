import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { lioshi } from "react-syntax-highlighter/dist/esm/styles/hljs";

function useStateView() {
  const [count, setCount] = useState(0);

  SyntaxHighlighter.registerLanguage("javascript", js);

  const code =
    'import React from "react";\n' +
    'import { useState } from "react";\n' +
    "\n" +
    "function useStateView() {\n" +
    "  const [count, setCount] = useState(0);\n" +
    "    return (\n" +
    "    <div>\n" +
    "      <button onClick={() => setCount(count - 1)}>-</button>\n" +
    "      {count}\n" +
    "      <button onClick={() => setCount(count + 1)}>+</button>\n" +
    "    </div>\n" +
    "  );\n" +
    "}\n" +
    "\n" +
    "export default useStateView;";

  return (
    <Container>
      <Container>
        <Button
          display="inline"
          variant="contained"
          color="primary"
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>

        <Typography
          variant="body1"
          gutterBottom
          align="center"
          display="inline"
        >
          {" " + count + " "}
        </Typography>

        <Button
          display="inline"
          variant="contained"
          color="primary"
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
      </Container>

      <Box>
        <SyntaxHighlighter style={lioshi}>{code}</SyntaxHighlighter>
      </Box>
    </Container>
  );
}

export default useStateView;
