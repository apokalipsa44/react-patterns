import React, { useState } from "react";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Box, Container, Typography } from "@material-ui/core";
import { hocCode } from "./codeSnippets/HocSnippets";

const RegularComponent = ({ hoover }) => {
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
};

function detectHoover(Component) {
    return function () {
        const [hoover, setHoover] = useState(false);
        
        return (
            <div
        onMouseOver={() => setHoover(true)}
        onMouseLeave={() => setHoover(false)}
      >
        <RegularComponent hoover={hoover} />
      </div>
    );
};
}

const WithHooverDetection = detectHoover(RegularComponent);

function HocView() {
  const hocDescription = (
    <Typography component="span">
      Decorator pattern (function) witch wraps a component with some extra logic. Can be
      reused with other components.
    </Typography>
  );

  return (
    <Container>
      {hocDescription}
      <Box margin="100px"></Box>

      <WithHooverDetection />
      <SyntaxHighlighter style={atomDark} language="jsx">
        {hocCode}
      </SyntaxHighlighter>
    </Container>
  );
}

export default HocView;
