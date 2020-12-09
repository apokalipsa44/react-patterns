import React from "react";
import { Container, Typography, Tabs, Tab, Box } from "@material-ui/core";
import { actionsSnippets } from "./reduxSnippets/actionsSnippets";
import { createStoreSnippets } from "./reduxSnippets/createStoreSnippets";
import { mainAppSnippets, mainAppNpms } from "./reduxSnippets/mainAppSnippets";
import {
  reducersSnippetsIndex,
  reducersSnippetsCounter,
} from "./reduxSnippets/reducersSnippets";
import { reduxFileStructure } from "./reduxSnippets/reduxSkeletonSnippets";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ReduxView() {
  function TabPanel(props) {
    const { children, selectedTab, index } = props;

    const isTabSelected = () => {
      return index === selectedTab;
    };

    return (
      isTabSelected() && (
        <Container>
          <Typography>{children}</Typography>
        </Container>
      )
    );
  }

  const [selectedTab, setValue] = React.useState(0);

  const handleChange = (event, newSelectedTab) => {
    setValue(newSelectedTab);
  };

  return (
    <Container>
      <Typography>React redux project file structure.</Typography>
      <pre>{reduxFileStructure}</pre>
      <Box mb="30px"></Box>
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab label="Main App" />
        <Tab label="Create Store" />
        <Tab label="Actions" />
        <Tab label="Reducers" />
      </Tabs>
      <TabPanel selectedTab={selectedTab} index={1}>
        <SyntaxHighlighter style={atomDark} language="jsx">
          {createStoreSnippets}
        </SyntaxHighlighter>
      </TabPanel>
      <TabPanel selectedTab={selectedTab} index={0}>
        <Typography>
          <pre>{mainAppNpms}</pre>
        </Typography>
        <SyntaxHighlighter style={atomDark} language="jsx">
          {mainAppSnippets}
        </SyntaxHighlighter>
      </TabPanel>
      <TabPanel selectedTab={selectedTab} index={2}>
        <Typography>File index.js in actions folder</Typography>
        <SyntaxHighlighter style={atomDark} language="jsx">
          {actionsSnippets}
        </SyntaxHighlighter>
      </TabPanel>
      <TabPanel selectedTab={selectedTab} index={3}>
        <Typography>File index.js in reducers folder</Typography>
        <SyntaxHighlighter style={atomDark} language="jsx">
          {reducersSnippetsIndex}
        </SyntaxHighlighter>
        <Box mb="30px"></Box>
        <Typography>File counterReducers.js in reducers folder</Typography>
        <SyntaxHighlighter style={atomDark} language="jsx">
          {reducersSnippetsCounter}
        </SyntaxHighlighter>
      </TabPanel>
    </Container>
  );
}

export default ReduxView;
