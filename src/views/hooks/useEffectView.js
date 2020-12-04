import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import HooksDescription from "../../components/descriptions/HooksDescription";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function UseEffectView() {
  const useEffectCode =
    "useEffect(() => {\n" +
    "      // code to be executed\n" +
    "      // axios.get('/user?name=donpiano')\n" +
    "  return () => {\n" +
    "     // cleanup function (unsubscribe or unmount)\n" +
    "  }, [modifiedVariable]);";

  const useEffectDescription = (
    <div>
      <Typography>
        It's basicity life cycle method for function components (all in one).
        Second array parameter adds magic to this. There a tree scenarios:
      </Typography>
      <Typography>
        1. No array passed - will run each time component gets re-rendered
      </Typography>
      <Typography>
        2. Passed empty array - act's like componentDidMount - runs only once
      </Typography>
      <Typography>
        3. Passed array argument with variables - will run only when passed
        variable gets changed
      </Typography>
    </div>
  );

 
  const catStatusCode =
    'import React from "react";\n' +
    'import { useState, useEffect } from "react";\n' +
    "\n" +
    "function useEffectExample() {\n" +
    '  const [responseStatus, setResponseStatus] = useState("500");\n' +
    "\n" +
    "  useEffect(() => {\n" +
    "    setImage();\n" +
    "  }, [responseStatus]);\n" +
    "\n" +
    "  const setImage = () => {\n" +
    "    return `https://http.cat/${responseStatus}`;\n" +
    "  };\n" +
    "\n" +
    "  return (\n" +
    "    <div>\n" +
    '        <button onClick={() => setResponseStatus("100")}>100</Button>\n' +
    '        <button onClick={() => setResponseStatus("200")}>200</Button> \n' +
    '        <button onClick={() => setResponseStatus("301")}>301</Button> \n' +
    '        <button onClick={() => setResponseStatus("401")}>401</Button> \n' +
    '        <button onClick={() => setResponseStatus("404")}>404</Button>\n' +
    "        \n" +
    "          <img src={setImage()} alt=\"status\" width='375px' height='300px'></img>\n" +
    "    </div>\n" +
    "  );\n" +
    "}\n" +
    "\n" +
    "export default useEffectView;";

  const [responseStatus, setResponseStatus] = useState("500");

  useEffect(() => {
    setImage();
   
  }, [responseStatus]);

  const setImage = () => {
    return `https://http.cat/${responseStatus}`;
  };

  return (
    <div>
      <HooksDescription
        basicHookCode={useEffectCode}
        basicHookDescription={useEffectDescription}
      ></HooksDescription>

      <Box margin="150px"></Box>
      <Container>
        <Typography>Cat response status (default is 500): </Typography>
        <Button
          onClick={() => setResponseStatus("100")}
          display="inline"
          variant="contained"
          color="primary"
        >
          100
        </Button>
        <Button
          onClick={() => setResponseStatus("200")}
          display="inline"
          variant="contained"
          color="primary"
        >
          200
        </Button>
        <Button
          onClick={() => setResponseStatus("301")}
          display="inline"
          variant="contained"
          color="primary"
        >
          301
        </Button>
        <Button
          onClick={() => setResponseStatus("401")}
          display="inline"
          variant="contained"
          color="primary"
        >
          401
        </Button>
        <Button
          onClick={() => setResponseStatus("404")}
          display="inline"
          variant="contained"
          color="primary"
        >
          404
        </Button>
        <Box margin="12px"></Box>
        <Container>
          <img src={setImage()} alt="status" width="475px" height="380px"></img>
        </Container>
        <SyntaxHighlighter style={darcula} language="jsx">
          {catStatusCode}
        </SyntaxHighlighter>
      </Container>
    </div>
  );
}

export default UseEffectView;
