import React from "react";
import {
  Drawer as MuiDrawer,
  Divider,
  CssBaseline,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import MenuLinks from "./MenuLinks";
import { hooksLinks } from "./links/hooksLinks";
import { stateManagementLinks  } from "./links/stateManagementLinks";

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
  topSpacer: {
    height: "80px",
  },
});

function Sidebar() {
  const classes = useStyles();
  return (
    <MuiDrawer variant="permanent" className={classes.drawer}>
      <div className={classes.topSpacer} />
      <Divider />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Hooks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuLinks linkList={hooksLinks} />
        </AccordionDetails>
      </Accordion>

      <Divider />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>State management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuLinks linkList={stateManagementLinks} />
        </AccordionDetails>
      </Accordion>
    </MuiDrawer>
  );
}

export default Sidebar;
