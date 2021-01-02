import { Card } from "@material-ui/core";
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: "1.3em 0",
      boxShadow: "none",
      backgroundColor: "transparent",
      [theme.breakpoints.up("lg")]: {
        backgroundColor: "white",
        padding: "1.2em",
        borderRadius: "25px",
      },
    },
  })
);

function ContainerCard({ children }) {
  const classes = useStyles();
  return <Card className={classes.root}>{children}</Card>;
}

export default ContainerCard;
