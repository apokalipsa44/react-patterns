import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/img/background.png";

   
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
});

function MainAppBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.appBarText}>
          React design patterns
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MainAppBar;
