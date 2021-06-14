import React from "react";
import styles from "./Footer.module.css";

//Icons
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>Copyright © 2021. IEEE SB TKMIT Kollam. All Rights Reserved</p>

      <div className={styles.icons}>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/ieee-sb-tkmit/"
        >
          <LinkedInIcon fontSize="inherit" />
        </a>
        <a target="_blank" href="https://instagram.com/ieeesbtkmit">
          <InstagramIcon fontSize="inherit" />
        </a>
        <a target="_blank" href="https://www.facebook.com/ieeetkmit/">
          <FacebookIcon fontSize="inherit" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
