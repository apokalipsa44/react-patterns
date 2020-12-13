import React from "react";
import { useState } from "react";
import { Box, Button, Container, Link, Typography } from "@material-ui/core";
import HooksDescription from "../../components/descriptions/HooksDescription";
import {
  customHookCode,
  kermitSnippet,
} from "./codeSnippets/CustomHookSnippets";
import kermit1 from "../../assets/img/kermit/kermit.jpg";
import kermit2 from "../../assets/img/kermit/kermit2.jpg";
import kermit3 from "../../assets/img/kermit/kermit3.jpg";
import kermit4 from "../../assets/img/kermit/kermit4.jpg";
import kermit5 from "../../assets/img/kermit/kermit5.jpg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {  atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
 

const assetsDownloadLink =
  "http://s000.tinyupload.com/?file_id=41173584674743472513";

function CustomHooksView() {
  const customHookDescription = (
    <>
      <Typography component={'span'} >
        Custom hook is a way to extract w a logic from other function components
        into a separate function. To hook become real react hook i must have
        name started with use keyword. This ensures that react performs it's
        hooks checks.
      </Typography>
      <Typography component={'span'} >
        So.. a custom hook is basically a function with name that's start's with
        use, and typically uses some normal hooks like use state or use effect
        to share it's logic between different components.
      </Typography>
    </>
  );

  const [isVisibleKermit1, setIsVisibleKermit1] = useKermit();
  const [isVisibleKermit2, setIsVisibleKermit2] = useKermit();
  const [isVisibleKermit3, setIsVisibleKermit3] = useKermit();
  const [isVisibleKermit4, setIsVisibleKermit4] = useKermit();
  const [isVisibleKermit5, setIsVisibleKermit5] = useKermit();

  return (
    <>
      <Container>
        <HooksDescription
          basicHookDescription={customHookDescription}
          basicHookCode={customHookCode}
        ></HooksDescription>
      </Container>

      <Box margin="150px"></Box>

      <Container>
        <Typography>
          Each Kermit has an independent "isCollapsed" state but the
          "collapsing" logic is shared thru custom hook "useKermit".
        </Typography>
        <Typography>
          For full kermit experience download assets{" "}
          <Link href={assetsDownloadLink} rel="noreferrer" target="_blank">
            <b>here</b>
          </Link>
          .
        </Typography>
      </Container>
      <Container>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          <Box
            width="260px"
            height="260px"
            m={2}
            display="flex"
            flexDirection="column"
          >
            <Box
              bgcolor="#dae1e6"
              width="260px"
              height="170px"
              alignSelf="flex-top"
            >
              {isVisibleKermit1 && <img src={kermit1} alt="kermit1" />}
            </Box>

            <Box alignSelf="flex-end">
              {" "}
              <Button variant="outlined" onClick={() => setIsVisibleKermit1()}>
                {isVisibleKermit1 ? "Hide" : "Reveal"}
              </Button>
            </Box>
          </Box>
          <Box
            width="260px"
            height="260px"
            m={2}
            display="flex"
            flexDirection="column"
          >
            <Box
              bgcolor="#dae1e6"
              width="260px"
              height="170px"
              alignSelf="flex-top"
            >
              {isVisibleKermit2 && <img src={kermit2} alt="kermit2" />}
            </Box>

            <Box alignSelf="flex-end">
              {" "}
              <Button variant="outlined" onClick={() => setIsVisibleKermit2()}>
                {isVisibleKermit2 ? "Hide" : "Reveal"}
              </Button>
            </Box>
          </Box>
          <Box
            width="260px"
            height="260px"
            m={2}
            display="flex"
            flexDirection="column"
          >
            <Box
              bgcolor="#dae1e6"
              width="260px"
              height="170px"
              alignSelf="flex-top"
            >
              {isVisibleKermit3 && <img src={kermit3} alt="kermit3" />}
            </Box>

            <Box alignSelf="flex-end">
              <Button variant="outlined" onClick={() => setIsVisibleKermit3()}>
                {isVisibleKermit3 ? "Hide" : "Reveal"}
              </Button>
            </Box>
          </Box>
          <Box
            width="260px"
            height="260px"
            m={2}
            display="flex"
            flexDirection="column"
          >
            <Box
              bgcolor="#dae1e6"
              width="260px"
              height="170px"
              alignSelf="flex-top"
            >
              {isVisibleKermit4 && <img src={kermit4} alt="kermit4" />}
            </Box>

            <Box alignSelf="flex-end">
              <Button variant="outlined" onClick={() => setIsVisibleKermit4()}>
                {isVisibleKermit4 ? "Hide" : "Reveal"}
              </Button>
            </Box>
          </Box>
          <Box
            width="260px"
            height="260px"
            m={2}
            display="flex"
            flexDirection="column"
          >
            <Box
              bgcolor="#dae1e6"
              width="260px"
              height="170px"
              alignSelf="flex-top"
            >
              {isVisibleKermit5 && <img src={kermit5} alt="kermit5" />}
            </Box>

            <Box alignSelf="flex-end">
              <Button variant="outlined" onClick={() => setIsVisibleKermit5()}>
                {isVisibleKermit5 ? "Hide" : "Reveal"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container>
        <SyntaxHighlighter wrapLines={true} style={atomDark} language="jsx">
          {kermitSnippet}
        </SyntaxHighlighter>
      </Container>
    </>
  );
}

export default CustomHooksView;

export function useKermit() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const setIsKermitCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };
  return [isCollapsed, setIsKermitCollapsed];
}
