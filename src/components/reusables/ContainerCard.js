import { Card } from "@material-ui/core";
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: "1.3em 0",
      boxShadow: "none",
      backgroundColor: "transparent",
      height: "100%",
      [theme.breakpoints.up("lg")]: {
        backgroundColor: "white",
        padding: "1.2em",
        borderRadius: "25px",
        boxShadow: "0 0.2px 1.9px rgba(0, 0, 0, 0.1)",
      },
    },
  })
);

function ContainerCard({ children }) {
  const classes = useStyles();
  return <Card className={classes.root}>{children}</Card>;
}

export default ContainerCard;
