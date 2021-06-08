import React from "react";
import { makeStyles } from "@material-ui/core";

//Styles
import style from "./styles";
const useStyles = makeStyles(style);

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
