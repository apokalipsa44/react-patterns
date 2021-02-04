import React, { useState } from "react";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Box, Container, Typography } from "@material-ui/core";
import { renderPropsCode } from "./codeSnippets/RenderPropsSnippets";

const RegularComponent = () => {
  function render(hoover) {
    return (
      <div
        style={{
          backgroundColor: hoover ? "#bd4ebf" : "#4e72bf",
          width: "60%",
          padding: "8px",
        }}
      >
        <h2>Component without logic</h2>
        <p>Color change is made using HOC!</p>
      </div>
    );
  }
  return <DetectHoover render={render} />;
};

function DetectHoover(props) {
  const [hoover, setHoover] = useState(false);

  return (
    <div
      onMouseOver={() => setHoover(true)}
      onMouseLeave={() => setHoover(false)}
    >
      {props.render(hoover)}
    </div>
  );
}

function RenderPropsView() {
  const renderPropsDescription = (
    <Typography component="span">
      Render props is something like inverted higher order components. Logic is
      passed from "smart" component to "regular" component via props.
    </Typography>
  );

  return (
    <Container>
      {renderPropsDescription}
      <Box margin="100px"></Box>

      <RegularComponent />
      <SyntaxHighlighter style={atomDark} language="jsx">
        {renderPropsCode}
      </SyntaxHighlighter>
    </Container>
  );
}

export default RenderPropsView;
