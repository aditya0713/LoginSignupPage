import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyWebsite</div>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/about" className={styles.navLink}>
          About
        </Link>
        <Link to="/login" className={styles.navLink}>
          Login
        </Link>
        <Link to="/signup" className={styles.navLink}>
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
