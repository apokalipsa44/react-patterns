import React from "react";
import { useContext, useState } from "react";
import HooksDescription from "./../../components/descriptions/HooksDescription";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Box, Container, Typography } from "@material-ui/core";

const name = "UserName";
export const NameContext = React.createContext(name);

function UseContextView() {
  const useContextCode = `// in parent element
export const ParentContext = React.createContext;

  <ParentContext.Provider value={importantVariableToPass}>
    //some children 
  </ParentContext.Provider>

//in child element
import {ParentContext} from ./Parent.js

const context = useContext(ParentContext);
// feel free to use context object in Your function component`;

  const useContextDescription = (
    <div>
      <Typography>
        useContext returns context object of a parent (SomeContext.Provider).
        This enables to use this object in nested child component, without need
        to passing down the props.
      </Typography>
      <Typography>
        Whenever parent gets updated child entire subtree gets re-renderd - even
        if <b>useMemo</b> or <b>shoudCopmponentUpdate()</b> were used along the
        way.
      </Typography>
    </div>
  );

  const exampleCode = `import React from "react";
import { useContext, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const name = "UserName"
export const NameContext = React.createContext(name);

function UseContextExample() {

  return (
      <div>
        <NameContext.Provider value={name}>
          <NotImportantChild></NotImportantChild>
        </NameContext.Provider>
    </div>
  );
}

export default UseContextView;

export function NotImportantChild() {
  return (
    <div>
      <h3>This is the first child</h3>
      <ImportantChild></ImportantChild>
      <h3>end of the first child</h3>
    </div>
  );
}

export function ImportantChild() {
  const name = useContext(NameContext);
  console.log(name)
  return 
  <div>
  <h3>Welcome to second child</h3>
  <h3>Name passed from context provider: {name}</h3>
  </div>;
}`;

  return (
    <div>
      <HooksDescription
        basicHookDescription={useContextDescription}
        basicHookCode={useContextCode}
      ></HooksDescription>
      <Box margin="150px"></Box>
      <Container>
        <NameContext.Provider value={name}>
          <NotImportantChild></NotImportantChild>
        </NameContext.Provider>
      </Container>
      <Container>
        <SyntaxHighlighter language="jsx" style={darcula}>
          {exampleCode}
        </SyntaxHighlighter>
      </Container>
    </div>
  );
}

export default UseContextView;

export function NotImportantChild() {
  return (
    <div>
      <Box bgcolor="lightblue" width="40%" p={1}>
        <Typography>This is the first child</Typography>
        <ImportantChild></ImportantChild>
        <Typography>end of the first child</Typography>
      </Box>
    </div>
  );
}

export function ImportantChild() {
  const name = useContext(NameContext);
  console.log(name);
  return (
    <Box color="white" bgcolor="gray" width="95%" p={1}>
      <Typography>Welcome to second child</Typography>
      <Typography>
        Name passed from context provider: <b>{name}</b>
      </Typography>
    </Box>
  );
}
