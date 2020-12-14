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
  Typography,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  appBar: {
    height: "120px",
  },
  darkModeSwitch: {
    zIndex: 1280,
    margin: "4px",
    position: "fixed",
    right: "1px",
    color: "#060d2e",
    fontSize: "6px",
  },
  darkModeSwitchSm: {
    zIndex: 1280,
    right: "1px",
    position: "fixed",
    margin: "0",
  },
  darkModeSwitchLabel: {
    color: "#060d2e",
    fontSize: "16px",
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
    if (!isScreenSm) return "";
    return darkState ? (
      <Typography className={classes.darkModeSwitchLabel}>
        Toggle light mode
      </Typography>
    ) : (
      <Typography className={classes.darkModeSwitchLabel}>
        Toggle dark mode
      </Typography>
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
                <FormControlLabel
                  label={darkSwitchLabelToggler()}
                  control={
                    <Switch
                      size="small"
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
