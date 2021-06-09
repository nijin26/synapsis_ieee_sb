import React from "react";
import classes from "./Footer.module.css";

import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <div className={classes.container}>
      <Typography variant="subtitle1" component="body1" gutterBottom>
        The site is made with 💗 by IEEE SB TKMIT
      </Typography>
      <Typography
        variant="subtitle2"
        component="body1"
        display="block"
        gutterBottom
      >
        Copyright © 2021 All rights reserved
      </Typography>
    </div>
  );
};

export default Footer;
