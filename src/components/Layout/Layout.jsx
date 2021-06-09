import React from "react";
import { makeStyles } from "@material-ui/core";

//Components
import Footer from "../Footer/Footer";

//Styles
import style from "./styles";
const useStyles = makeStyles(style);

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
