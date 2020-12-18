import React from "react";
import { useContext } from "react";
import HooksDescription from "../../components/descriptions/HooksDescription";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Box, Container, Typography } from "@material-ui/core";

const name = "UserName";
export const NameContext = React.createContext(name);

function UseContextView() {
  const useContextCode = `// in parent element
export const ParentContext = React.createContext;

  <ParentContext.Provider value={importantVariableToPass}>  // value is a must
    //some children 
  </ParentContext.Provider>

//in child element
import {ParentContext} from ./Parent.js

const context = useContext(ParentContext);
// feel free to use context object in Your function component`;

  const useContextDescription = (
    <>
      <Typography component="span">
        useContext returns context object of a parent (SomeContext.Provider).
        This enables to use this object in nested child component, without need
        to passing down the props.
      </Typography>
      <Typography component="span">
        Whenever parent gets updated child entire subtree gets re-renderd - even
        if <b>useMemo</b> or <b>shoudCopmponentUpdate()</b> were used along the
        way.
      </Typography>
    </>
  );

  const exampleCode = `import React from "react";
import { useContext, useState } from "react";

const name = "UserName"  // this can also be an object
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

export default UseContextExample;

export function NotImportantChild() {
  return (
    <div>
      <h3>I didn't get any props...</h3>
      <ImportantChild></ImportantChild>
      <h3>end of the first child</h3>
    </div>
  );
}

export function ImportantChild() {
  const name = useContext(NameContext);

  return (
     <div>
  <h3>But i did!</h3>
  <h3>Name passed from context provider: {name}</h3>
  </div>
  );
}`;

  return (
    <>
      <Container>
        <HooksDescription
          basicHookDescription={useContextDescription}
          basicHookCode={useContextCode}
        ></HooksDescription>
      </Container>

      <Box margin="150px"></Box>
      <Container>
        <NameContext.Provider value={name}>
          <NotImportantChild></NotImportantChild>
        </NameContext.Provider>
      </Container>
      <Container>
        <SyntaxHighlighter language="jsx" style={atomDark}>
          {exampleCode}
        </SyntaxHighlighter>
      </Container>
    </>
  );
}

export default UseContextView;

export function NotImportantChild() {
  return (
    <div>
      <Box bgcolor="#d9b041" width="40%" p={1}>
        <Typography>I didn't get any props...</Typography>
        <ImportantChild></ImportantChild>
        <Typography>end of the first child</Typography>
      </Box>
    </div>
  );
}

export function ImportantChild() {
  const name = useContext(NameContext);
  return (
    <Box color="white" bgcolor="gray" width="95%" p={1}>
      <Typography>But i did!</Typography>
      <Typography>
        Name passed from context provider: <b>{name}</b>
      </Typography>
    </Box>
  );
}
