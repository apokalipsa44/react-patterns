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


const useStyles = makeStyles({
 
  topSpacer: {
    height: "80px",
  },
});

function Sidebar() {
  const classes = useStyles();
  return (
    <div >
      
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
          <Typography>State and Props</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuLinks linkList={stateManagementLinks} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Sidebar;
