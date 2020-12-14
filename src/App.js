import React, { useState, useEffect } from "react";
import Sidebar from "./components/layout/Sidebar";
import MainAppBar from "./components/layout/MainAppBar";
import MainPage from "./components/layout/MainPage";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { CssBaseline, FormControlLabel, Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from '@material-ui/core/styles';
// import ReactGA from "react-ga";

const useStyles = makeStyles({
  appBar: {
    height: "120px",
  },
  darkModeSwitch: {
    border: "3px solid rgba(0,0,0,0.18);",
    borderRadius: "15px",
    zIndex: 1280,
    margin: "4px",
    position: "fixed",
    right: "1px",
    color: "#f0f6ff",
  },
  darkModeSwitchSm: {
    zIndex: 1280,
    right: "1px",
    position: "fixed",
    margin: "0",
  },
});

function App() {
  // useEffect(() => {
  // ReactGA.initialize("G-JQVL1STPCF");
  // ReactGA.pageview('/')
  // ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

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

  const isScreenSm = useMediaQuery(darkTheme.breakpoints.up("sm"));

  const darkSwitchLabelToggler = () => {
    if (!isScreenSm) return "";
    return darkState ? "Toggle light mode" : "Toggle dark mode";
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.appBar}>
              <div
                className={
                  !isScreenSm
                    ? classes.darkModeSwitchSm
                    : classes.darkModeSwitch
                }
              >
                <FormControlLabel
                  label={darkSwitchLabelToggler()}
                  control={
                    <Switch
                      color="secondary"
                      checked={darkState}
                      onChange={handleThemeChange}
                    />
                  }
                ></FormControlLabel>
              </div>
              <MainAppBar />
            </div>
          </Grid>
          <Grid item sm={2} xs={12}>
            <Sidebar />
          </Grid>
          <Grid item sm={10} xs={12}>
            <MainPage />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
