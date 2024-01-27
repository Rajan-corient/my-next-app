import React from "react";
import Link from "next/Link";
import styles from "../styles/blog.module.css";

// step1: Read all the files from blogdata directory
// step2: Iterate through then and display in blog component
const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href={"/blogpost/learn-next"}>
          <div className={styles.blogItem}>
            <h3>How to learn Next in 2024</h3>
            <p>Next js in a react framework</p>
          </div>
        </Link>
        <div className={styles.blogItem}>
          <h3>How to learn Next in 2024</h3>
          <p>Next js in a react framework</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn Next in 2024</h3>
          <p>Next js in a react framework</p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
