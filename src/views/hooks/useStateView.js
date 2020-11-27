import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { lioshi } from "react-syntax-highlighter/dist/esm/styles/hljs";
import HooksDescription from "../../components/descriptions/HooksDescription";

function useStateView() {
  const [count, setCount] = useState(0);

  SyntaxHighlighter.registerLanguage("javascript", js);

  const counterCode =
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

  const useStateCode =
    "const [state, setState] = useState(initialState)\n"+
    "// setState() is executed to create a new state value";

  const useStateDescription =
    "Allows to manage state in function component. " +
    "Initial state can be set as useState parameter. Every time function setState " +
    "is executed new state is created.";

  return (
    <div >
      <HooksDescription
        basicHookCode={useStateCode}
        basicHookDescription={useStateDescription}
      ></HooksDescription>
    <Box margin='50px'></Box>
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

      <Container>
        <SyntaxHighlighter style={lioshi}>{counterCode}</SyntaxHighlighter>
      </Container>
    </div>
  );
}

export default useStateView;
