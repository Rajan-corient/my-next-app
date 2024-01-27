import React, { useEffect, useState } from "react";
import Link from "next/Link";
import styles from "../styles/blog.module.css";

// step1: Read all the files from blogdata directory
// step2: Iterate through then and display in blog component
const Blog = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    console.log("blog component rendered");
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const apiUrl = "http://localhost:3000/api/blog";
    const res = await fetch(apiUrl);
    const data = await res.json();
    setBlogList(data);
    console.log("data", data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogList.map((item) => (
          <div className={styles.blogItem} key={item.slug}>
            <h3>{item.title}</h3>
            <p>
              {item.content.substr(0, 50)}.....
              <Link href={`/blogpost/${item.slug}`}>
                <span className={styles.readMore}>Read more</span>
              </Link>
            </p>
            <p>{item.author}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Blog;
