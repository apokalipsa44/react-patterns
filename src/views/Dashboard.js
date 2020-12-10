import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dashboard: {
    fontSize: "150%",
    marginLeft: "40px",
    marginTop: "0",
  },
});

function Dashboard() {
  const classes = useStyles();
  return <pre className={classes.dashboard}>⟵ pick an element on the left </pre>;
}

export default Dashboard;
