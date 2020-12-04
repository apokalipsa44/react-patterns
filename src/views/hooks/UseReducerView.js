import React from "react";
import HooksDescription from "../../components/descriptions/HooksDescription";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Typography } from "@material-ui/core";
import { useReducerCode } from "./codeSnippets/UseReducerSnippets";

function UseReducerView() {
  const useReducerDescription = (
    <div>
      <Typography>
        State management hook similar to <b>reducer</b> from <b>Redux</b>{" "}
        library. You initialize Your state just like in useState hook, but
        instead of <b>setState</b> function there is a <b>dispatch</b> function witch provides
        all state modifying scenarios to Your <b>reducer</b> function (witch in turn
        does all the work){" "}
      </Typography>
    </div>
  );

  return (
    <div>
      <HooksDescription
        basicHookCode={useReducerCode}
        basicHookDescription={useReducerDescription}
      ></HooksDescription>
    </div>
  );
}

export default UseReducerView;
