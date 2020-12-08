import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import MainAppBar from "./components/layout/MainAppBar";
import MainPage from "./components/layout/MainPage";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { CssBaseline, FormControlLabel } from "@material-ui/core";
import { positions } from "@material-ui/system";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
  darkModeSwitch: {
    zIndex: 1280,
    margin: "12px",
    color: "inherit",
    position: "absolute",
    right: "16px",
  },
});

function App() {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <MainAppBar />
        <FormControlLabel
          className={classes.darkModeSwitch}
          label="Dark mode"
          control={
            <Switch
              color="secondary[200]"
              checked={darkState}
              onChange={handleThemeChange}
            />
          }
        ></FormControlLabel>
        <Sidebar />
        <MainPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
