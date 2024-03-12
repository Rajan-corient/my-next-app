import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav style={props.style} className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
