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
import { makeStyles, useTheme } from "@material-ui/core/styles";
import backgroundImage from "../../assets/img/side-background.png";
import MenuLinks from "./MenuLinks";

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
});

function Sidebar() {
  const classes = useStyles();
  return (
    <MuiDrawer variant="permanent" className={classes.drawer}>
        <div className={classes.toolbar} />
      <Divider />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Hooks</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
            <MenuLinks/>
          
        </AccordionDetails>
      </Accordion>

      <Divider />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >HOC's</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
        </AccordionDetails>
      </Accordion>
    </MuiDrawer>
  );
}

export default Sidebar;
