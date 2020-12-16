import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import MainAppBar from "./components/layout/MainAppBar";
import MainPage from "./components/layout/MainPage";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import {
  CssBaseline,
  FormControlLabel,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const useStyles = makeStyles({
  appBar: {
    height: "120px",
  },
  darkModeSwitch: {
    zIndex: 1280,
    margin: "12px",
    position: "fixed",
    right: "1px",
    // color: "#060d2e",
    fontSize: "6px",
  },
  darkModeSwitchSm: {
    zIndex: 1280,
    right: "1px",
    position: "fixed",
    margin: "8px",
  },
  darkModeSwitchLabel: {
    color: "#f0f4f5",
    fontSize: "16px",
    fontWeight: "bold",
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

  const isScreenSm = useMediaQuery(darkTheme.breakpoints.up("sm"));

  const darkSwitchLabelToggler = () => {
    if (!isScreenSm)
      return (
        <IconButton onClick={handleThemeChange}>
          <Brightness4Icon fontSize="small" />
        </IconButton>
      );
    else
      return (
        <FormControlLabel
          labelPlacement="start"
          label={
            <Typography className={classes.darkModeSwitchLabel}>
              {!darkState ? "Toggle dark mode" : "Toggle light mode"}
            </Typography>
          }
          control={
            <Switch
              size="small"
              color="secondary"
              checked={darkState}
              onChange={handleThemeChange}
            />
          }
        ></FormControlLabel>
      );
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
                {darkSwitchLabelToggler()}
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
