import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBar: {
    display: "flex",
    zIndex: 1250,
  },
});

function MainAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.appBar}>
      <AppBar color="inherit" position="fixed">
        <Toolbar>
          <Typography>React patterns toolbar main</Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainAppBar;
