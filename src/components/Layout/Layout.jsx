import React from "react";
import { makeStyles } from "@material-ui/core";

//Components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

//Styles
import style from "./styles";
const useStyles = makeStyles(style);

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbar />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
