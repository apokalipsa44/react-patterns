import React from "react";
import { useState } from "react";
import { Box, Container, Typography } from "@material-ui/core";
import HooksDescription from "../../components/descriptions/HooksDescription";
import { customHookCode } from "./codeSnippets/CustomHookSnippets";
import kermit1 from "../../assets/img/kermit/kermit.jpg";
import kermit2 from "../../assets/img/kermit/kermit2.jpg";
import kermit3 from "../../assets/img/kermit/kermit3.jpg";
import kermit4 from "../../assets/img/kermit/kermit4.jpg";
import kermit5 from "../../assets/img/kermit/kermit5.jpg";

function CustomHooksView() {
  const customHookDescription = (
    <div>
      <Typography>
        Custom hook is a way to extract w a logic from other function components
        into a separate function. To hook become real react hook i must have
        name started with use keyword. This ensures that react performs it's
        hooks checks.
      </Typography>
      <Typography>
        So.. a custom hook is basically a function with name that's start's with
        use, and typically uses some normal hooks like use state or use effect
        to share it's logic between different components.
      </Typography>
    </div>
  );

  const [isVisibleKermit1, setIsVisibleKermit1] = useKermit();
  const [isVisibleKermit2, setIsVisibleKermit2] = useKermit();
  const [isVisibleKermit3, setIsVisibleKermit3] = useKermit();
  const [isVisibleKermit4, setIsVisibleKermit4] = useKermit();
  const [isVisibleKermit5, setIsVisibleKermit5] = useKermit();

  return (
    <div>
      <HooksDescription
        basicHookDescription={customHookDescription}
        basicHookCode={customHookCode}
      ></HooksDescription>
      <Box margin="150px"></Box>
      <Container>
        <div
          style={{
            display: "inline-block",
            margin: "12px",
          }}
        >
          {isVisibleKermit1 && <img src={kermit1} alt="kermit" />}
          <button
            style={{ display: "block" }}
            onClick={() => setIsVisibleKermit1()}
          >
            Reveal
          </button>
        </div>
        <div
          style={{
            display: "inline-block",
            margin: "12px",
          }}
        >
          {isVisibleKermit2 && <img src={kermit2} alt="kermit" />}
          <button
            style={{ display: "block" }}
            onClick={() => setIsVisibleKermit2()}
          >
            Reveal
          </button>
        </div>
        <div
          style={{
            display: "inline-block",
            margin: "12px",
          }}
        >
          {isVisibleKermit3 && <img src={kermit3} alt="kermit" />}
          <button
            style={{ display: "block" }}
            onClick={() => setIsVisibleKermit3()}
          >
            Reveal
          </button>
        </div>
        <div
          style={{
            display: "inline-block",
            margin: "12px",
          }}
        >
          {isVisibleKermit4 && <img src={kermit4} alt="kermit" />}
          <button
            style={{ display: "block" }}
            on
            onClick={() => setIsVisibleKermit4()}
          >
            Reveal
          </button>
        </div>
        <div
          style={{
            display: "inline-block",
            margin: "12px",
          }}
        >
          {isVisibleKermit5 && <img src={kermit5} alt="kermit" />}
          <button
            style={{ display: "block" }}
            on
            onClick={() => setIsVisibleKermit5()}
          >
            Reveal
          </button>
        </div>
      </Container>
    </div>
  );
}

export default CustomHooksView;

export function useKermit() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const setIsKermitCollapsed = () => {
    setIsCollapsed(!isCollapsed);
    console.log(isCollapsed);
  };
  return [isCollapsed, setIsKermitCollapsed];
}
