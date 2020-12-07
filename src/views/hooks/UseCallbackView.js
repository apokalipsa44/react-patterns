import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { useCallbackCode } from "./codeSnippets/UseCallbackSnippets";
import HooksDescription from "../../components/descriptions/HooksDescription";
import { Link } from "react-router-dom";

function UseCallbackView() {
  const useCallbackDescription = (
    <div>
      <Typography>
        Almost same thing as <b>useMemo</b> hook, one difference is that
        useCallback returns a function, so You can pass arguments to it.
      </Typography>
      <Typography>
        When second array parameter is provided, memoized function is executed
        every time that parameter gets changed.
      </Typography>
    </div>
  );

  return (
    <div>
      <HooksDescription
        basicHookDescription={useCallbackDescription}
        basicHookCode={useCallbackCode}
      ></HooksDescription>
      <Container>
        <Box m="150px"></Box>
        <Typography>
          More about useMemo{" "}
          <Link to="/hooks/useMemo">
            <b>here</b>.
          </Link>
        </Typography>
      </Container>
    </div>
  );
}

export default UseCallbackView;
