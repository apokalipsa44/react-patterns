import React, { Component } from "react";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Box, Container, Typography } from "@material-ui/core";
import {
  contextApiExampleCode,
  contextApiBasicCode,
} from "./codeSnippets/contextApiSnippets";
import { Link } from "react-router-dom";

export const NameContext = React.createContext();

const contextApiDescription = (
  <Container>
    <Typography>
      Most basic way to pass props between class components. You can pass state
      values and functions (also state modifying functions).
    </Typography>
    <Typography>
      More recent and easy to use is useContext hook as described{' '}
      <Link to="/hooks/useMemo">
        <b>here</b>.
      </Link>
    </Typography>
    <SyntaxHighlighter style={atomDark} language="jsx">
      {contextApiBasicCode}
    </SyntaxHighlighter>
  </Container>
);

export default class ContextProviderView extends Component {
  state = {
    name: "UserName",
  };

  render() {
    return (
      <>
        {contextApiDescription}
        <Box mb="100px"></Box>
        <Container>
          <NameContext.Provider value={this.state}>
            <NotImportantChild />
          </NameContext.Provider>
          <SyntaxHighlighter style={atomDark} language="jsx">
            {contextApiExampleCode}
          </SyntaxHighlighter>
        </Container>
      </>
    );
  }
}

class NotImportantChild extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#d9b041",
          paddingLeft: "12px",
          paddingRight: "12px",
          width: "30%",
        }}
      >
        <h3>I didn't get any props...</h3>
        <ImportantChild></ImportantChild>
        <h3>end of the first child</h3>
      </div>
    );
  }
}

class ImportantChild extends Component {
  render() {
    return (
      <NameContext.Consumer>
        {(context) => (
          <div style={{ backgroundColor: "#f1f1f1", color: "#303030" }}>
            <h3>But i did!</h3>
            <h3>Name passed from context provider: {context.name}</h3>
          </div>
        )}
      </NameContext.Consumer>
    );
  }
}
