import React, { useMemo, useState } from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import HooksDescription from "../../components/descriptions/HooksDescription";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function UseMemoView() {
  const useMemoDescription = (
    <>
      <Typography component="span">
        Allows us to memoize the function. If a function returns same output
        each time, there is no point to run it every time component gets
        re-rendered. This hook can't be used when component receives props or
        modifies the state.
      </Typography>
      <Typography component="span">
        When second array parameter is provided, memoized function is executed
        every time that parameter gets changed.
      </Typography>
      <Typography component="span">
        Most common is to use it as <b>shouldComponentUpdate</b> alternative.
      </Typography>
    </>
  );
  const useMemoCode =
    "const memoizedFuncOutput = useMemo(()=> heavyFunction(), [modifiedVariable])";

  const counterCode =
    'import React, { useMemo, useState } from "react";\n' +
    "\n" +
    "function UseMemoExample() {\n" +
    " const [state, setState] = useState(1);\n" +
    "\n" +
    "  const reRenderOnClickHandle = () => {\n" +
    "    setState(state + 1);  // this is just to force re-rendering\n" +
    "  };\n" +
    "\n" +
    "  const memoizedIndependentCounter = useMemo(() => IndependentCounter(), []);\n" +
    "  return (\n" +
    "    <div>\n" +
    "       <button onClick={reRenderOnClickHandle}>Re-render</button>\n" +
    "          independent counter (increases each time You hit re-render): <IndependentCounter></IndependentCounter>\n" +
    "          memoized counter (useMemo prevents it from counting): {memoizedIndependentCounter}\n" +
    "    </div>\n" +
    "  );\n" +
    "}\n" +
    "\n" +
    "export default UseMemoView;\n" +
    "\n" +
    "let count = 0;\n" +
    "export function IndependentCounter() {\n" +
    "  if (count < 100) {\n" +
    "    const timer = setInterval(() => {\n" +
    "      count++;\n" +
    "      if (count > 100) clearInterval(timer);\n" +
    "    }, 1000);\n" +
    "  }\n" +
    "\n" +
    "  return <h3>{count}</h3>;\n" +
    "}";

  const [state, setState] = useState(1);

  const reRenderOnClickHandle = () => {
    setState(state + 1);
  };

  const clearCounterOnClickHandle = () => {
    count = 0;
    reRenderOnClickHandle();
  };

  const memoizedIndependentCounter = useMemo(() => IndependentCounter(), []);
  return (
    <>
      <Container>
        <HooksDescription
          basicHookCode={useMemoCode}
          basicHookDescription={useMemoDescription}
        ></HooksDescription>
      </Container>

      <Box margin="150px"></Box>
      <Container>
        <Button variant="outlined" onClick={reRenderOnClickHandle}>
          Re-render
        </Button>{" "}
        <Button variant="outlined" onClick={clearCounterOnClickHandle}>
          clear counter
        </Button>
        <Container>
          <Typography>
            <b>independent counter</b> (increases each time You hit re-render):{" "}
          </Typography>
          <IndependentCounter></IndependentCounter>
          <Typography>
            <b>memoized independent counter</b> (useMemo prevents it from
            counting):{" "}
          </Typography>
          {memoizedIndependentCounter}
        </Container>
        <SyntaxHighlighter style={atomDark} language="jsx">
          {counterCode}
        </SyntaxHighlighter>
      </Container>
    </>
  );
}

export default UseMemoView;

let count = 0;
export function IndependentCounter() {
  if (count < 100) {
    const timer = setInterval(() => {
      count++;
      if (count > 100) clearInterval(timer);
    }, 1000);
  }
  return <h3>{count}</h3>;
}
