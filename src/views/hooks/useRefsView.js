import React from "react";
import { Container } from "@material-ui/core";
import HooksDescription from "../../components/descriptions/HooksDescription";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function useRefsView() {
  const useRefsDescription = "A way to select DOM elements generated from jsx. ";

  const useRefsCode = "";

  return (
    <Container>
      <HooksDescription
        basicHookCode={useRefsCode}
        basicHookDescription={useRefsDescription}
      ></HooksDescription>
    </Container>
  );
}

export default useRefsView;
