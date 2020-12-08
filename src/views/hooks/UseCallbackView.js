import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { useCallbackCode } from "./codeSnippets/UseCallbackSnippets";
import HooksDescription from "../../components/descriptions/HooksDescription";
import { Link } from "react-router-dom";

function UseCallbackView() {
  const useCallbackDescription = (
    <>
      <Typography component={"span"}>
        Almost same thing as <b>useMemo</b> hook, one difference is that
        useCallback returns a function, so You can pass arguments to it.
      </Typography>
      <Typography component={"span"}>
        When second array parameter is provided, memoized function is executed
        every time that parameter gets changed.
      </Typography>
    </>
  );

  return (
    <>
      <Container>
        <HooksDescription
          basicHookDescription={useCallbackDescription}
          basicHookCode={useCallbackCode}
        ></HooksDescription>
      </Container>

      <Container>
        <Box m="150px"></Box>
        <Typography>
          More about useMemo{" "}
          <Link to="/hooks/useMemo">
            <b>here</b>.
          </Link>
        </Typography>
      </Container>
    </>
  );
}

export default UseCallbackView;
