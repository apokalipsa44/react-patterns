import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { Component } from "react";
import {
  setStateCode,
  setStateBasicCode,
  exampleState
} from "./codeSnippets/setStateSnippets";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const setStateDescription = (
  <Typography component={"span"}>
    Basic way to manage and modify state in class components.
  </Typography>
);

export default class SetStateView extends Component {
  state = {
    isOpen: false,
    name: "DonPiano",
  };

  handleButtonClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    console.log(this.state);
  }

  render() {
    return (
      <Container>
        {setStateDescription}
        <SyntaxHighlighter style={atomDark} language="jsx">
          {setStateBasicCode}
        </SyntaxHighlighter>
        <Box mb="100px"></Box>
        <Container>
          {" "}
          <Typography variant="span">
            <pre>{exampleState}</pre>
          </Typography>
          {!this.state.isOpen && (
            <Button onClick={this.handleButtonClick.bind(this)}> Login</Button>
          )}
          {this.state.isOpen && (
            <Container>
              <Typography display='block' variant="p">Logged as {this.state.name}</Typography>
              <Button  onClick={this.handleButtonClick.bind(this)}>
                Logout
              </Button>
            </Container>
          )}
        </Container>
        <SyntaxHighlighter style={atomDark} language="jsx">
          {setStateCode}
        </SyntaxHighlighter>
      </Container>
    );
  }
}
