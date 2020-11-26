import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { lioshi } from "react-syntax-highlighter/dist/esm/styles/hljs";

function useStateView() {
  const [count, setCount] = useState(0);

  SyntaxHighlighter.registerLanguage("javascript", js);

  return (
    <Container>
    <Container>
       <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count - 1)}
      >
        -
      </Button>
      <Typography>{count}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>
    </Container>
     
      <Container>
        <SyntaxHighlighter style={lioshi}>
          {
            'import React from "react";\r\nimport { useState } from "react";\r\n\r\nfunction useStateView() {\r\n  const [count, setCount] = useState(0);\r\n    return (\r\n    <div>\r\n      <button onClick={() => setCount(count - 1)}>-</button>\r\n      {count}\r\n      <button onClick={() => setCount(count + 1)}>+</button>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default useStateView;'
          }
        </SyntaxHighlighter>
      </Container>
    </Container>
  );
}

export default useStateView;
