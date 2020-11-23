import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { CssBaseline, Typography } from "@material-ui/core";

function MainAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography>React patterns toolbar main</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainAppBar;
