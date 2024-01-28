import React, { useEffect, useState } from "react";
import Link from "next/Link";
import styles from "../styles/blog.module.css";
import * as fs from "fs";

// step1: Read all the files from blogdata directory
// step2: Iterate through then and display in blog component
const Blog = (props) => {
  const [blogList, setBlogList] = useState(props.allBlogs);

  // This is called for client side rendering
  // const [blogList, setBlogList] = useState([]);
  // useEffect(() => {
  //   console.log("blog component rendered");
  //   getBlogs();
  // }, []);

  // const getBlogs = async () => {
  //   const apiUrl = "http://localhost:3000/api/blog";
  //   const res = await fetch(apiUrl);
  //   const data = await res.json();
  //   setBlogList(data);
  //   console.log("data", data);
  // };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogList.map((item) => (
          <div className={styles.blogItem} key={item.slug}>
            <h3>{item.title}</h3>
            <p>
              {item.content.substr(0, 40)}.....
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

// This method is used for server side rendering
// // This gets called on every request
// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   const apiUrl = "http://localhost:3000/api/blog";
//   const res = await fetch(apiUrl);
//   const allBlogs = await res.json();
//   console.log("allBlogs", allBlogs);

//   // Pass data to the page via props
//   return { props: { allBlogs } };
// }

// This method is used for static side generation
export const getStaticProps = async (context) => {
  const allBlogs = [];
  const data = await fs.promises.readdir("blogdata");
  for (const item of data) {
    const filedata = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    allBlogs.push(JSON.parse(filedata));
  }
  return { props: { allBlogs } };
};

export default Blog;
