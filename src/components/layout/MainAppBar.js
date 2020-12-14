import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/img/background.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from '@material-ui/core/styles';


   
const useStyles = makeStyles({
  appBar: {
    display: "flex",
    zIndex: 1250,
    backgroundImage: "url(" + background + ")",
    height: "8%",
    position: "fixed",
  },
  appBarText: {
    fontFamily: 'Karmatic Arcade',
  },
  appBarSm:{
     display: "flex",
    zIndex: 1250,
    backgroundImage: "url(" + background + ")",
    height: "100px",
    position: "fixed",
    paddingTop:'36px'
  }
});

function MainAppBar() {
  const classes = useStyles();
  const darkTheme = useTheme();
  const isScreenSm = useMediaQuery(darkTheme.breakpoints.up("sm"));

  return (
    <AppBar className={isScreenSm ? classes.appBar : classes.appBarSm}>
      <Toolbar>
        <Typography className={classes.appBarText}>
          React design patterns
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MainAppBar;
