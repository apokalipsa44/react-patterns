import React from "react";
import { useRef, useEffect, useState } from "react";
import { Box, Button, Container, Input, TextField } from "@material-ui/core";
import HooksDescription from "../../components/descriptions/HooksDescription";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function useRefsView() {
  const useRefsDescription =
    "A way to select DOM elements generated from jsx. " +
    "You have to pass to JSX element a ref property as a variable object defined by useRef hook function.";

  const useRefsCode =
    "const inputElement = useRef(initialValue) \n" +
    "// inputElement.current is initialized with initialValue variable \n" +
    "\n" +
    '<input ref={inputElement} type="text"/>';

  const loginFormCode =
    'import React from "react";\n' +
    'import { useRef, useEffect } from "react";\n' +
    "\n" +
    "function useRefExample (){\n" +
    "  const usernameInput = useRef(null);\n" +
    "  const passwordInput = useRef(null);\n" +
    "  const loginBtn = useRef(null);\n" +
    "\n" +
    "  useEffect(() => {\n" +
    "    usernameInput.current.focus();\n" +
    "  }, []);\n" +
    "\n" +
    "  const firstKeyDown = (e) => {\n" +
    '    if (e.key === "Enter") {\n' +
    "      passwordInput.current.focus();\n" +
    "    }\n" +
    "  };\n" +
    "\n" +
    "  const lastKeyDown = (e) => {\n" +
    '    if (e.key === "Enter") {\n' +
    "      loginBtn.current.focus();\n" +
    "    }\n" +
    "  };\n" +
    "\n" +
    "  const login = () => {\n" +
    "    alert(`${usernameInput.current.value} is logged!`)\n" +
    "  };\n" +
    "\n" +
    "return(\n" +
    "  <div>\n" +
    '     <input ref={usernameInput} type="text" onKeyDown={firstKeyDown} />\n' +
    '        <input ref={passwordInput} type="text" onKeyDown={lastKeyDown} />\n' +
    '        <button ref={loginBtn} type="button" onClick={login}>\n' +
    "          Login\n" +
    "        </button>\n" +
    "     </div>\n" +
    ");\n" +
    "}\n" +
    "export default useRefExample;";

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const loginBtn = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    usernameInput.current.focus();
  }, []);

  const firstKeyDown = (e) => {
    if (e.key === "Enter") {
      passwordInput.current.focus();
    }
  };

  const lastKeyDown = (e) => {
    if (e.key === "Enter") {
      loginBtn.current.focus();
    }
  };

  const handleOnChange = (e) => {
    if (e.target.name === "username") setUsername(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const login = () => {
    alert(`${username} is logged!`);
  };
  return (
    <div>
      <HooksDescription
        basicHookCode={useRefsCode}
        basicHookDescription={useRefsDescription}
      ></HooksDescription>
      <Box margin="150px"></Box>
      <Container>
        <Box ml="10px">
          <TextField
            label="username"
            placeholder="username"
            margin="dense"
            name="username"
            inputRef={usernameInput}
            type="text"
            onKeyDown={firstKeyDown}
            value={username}
            onChange={handleOnChange}
          />
        </Box>
        <Box ml="10px" mb="15px">
          <TextField
            label="password"
            placeholder="password"
            margin="dense"
            name="password"
            inputRef={passwordInput}
            type="text"
            onKeyDown={lastKeyDown}
            value={password}
            onChange={handleOnChange}
          />
        </Box>
        <Box ml="30px">
          <Button ref={loginBtn} type="button" onClick={login}>
            Login
          </Button>
        </Box>
      </Container>
      <Container>
        <SyntaxHighlighter style={darcula} language="javascript">
          {loginFormCode}
        </SyntaxHighlighter>
      </Container>
    </div>
  );
}

export default useRefsView;
