import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Websites from "../components/Websites";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      textAlign: "center",
    },
    parent: {
      textAlign: "center",
    },
  })
);

const IndexPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <title>Bookmarking App</title>
      <h1>Bookmarking App using GraphQL, Apollo and Netlify</h1>
      <Websites />
    </div>
  );
};

export default IndexPage;
