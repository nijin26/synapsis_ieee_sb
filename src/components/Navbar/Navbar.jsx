import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/about_homelogo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <div>
          <img className={styles.home_logo} src={Logo} alt="" srcset="" />
        </div>
      </Link>

      <div className={styles.lbutton}>
        <Link to="/about">
          <button className={styles.abt_btn}>About Us</button>
        </Link>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc9YVyQ62FFbhu6h9BKlrOmDp3SUBEl8VuP6jfYF-CRFYzqug/viewform"
          target="_blank"
        >
          <button className={styles.reg_btn}>Register Now</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
