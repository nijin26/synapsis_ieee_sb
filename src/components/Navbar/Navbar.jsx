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
        <Link to="/register">
          <button className={styles.reg_btn}>Register Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
