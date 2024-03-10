import React, { useState } from "react";
import Link from "next/Link";
import styles from "../styles/Blog.module.css";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

// step1: Read all the files from blogdata directory
// step2: Iterate through then display in blog component
const Blog = (props) => {
  const [blogList, setBlogList] = useState(props.allBlogs || []);
  const [count, setCount] = useState(4);

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

  const fetchData = async () => {
    const apiUrl = `http://localhost:3000/api/blog/?count=${count + 4}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log("data", data);
    setCount((_count) => _count + 4);
    setBlogList(data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* {blogList.map((item) => (
          <div className={styles.blogItem} key={item.slug}>
            <h3>{item.title}</h3>
            <div>
              <p>{item.content.substr(0, 40)}</p>
              <span className={styles.author}> --- {item.author}</span>
            </div>
            <p>
              <Link href={`/blogpost/${item.slug}`}>
                <button className={styles.readMore}>Read More</button>
              </Link>
            </p>
          </div>
        ))} */}

        <InfiniteScroll
          dataLength={blogList.length}
          next={fetchData}
          hasMore={props.allCount !== blogList.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogList.map((item) => (
            <div className={styles.blogItem} key={item.slug}>
              <h3>{item.title}</h3>
              <div>
                <p>{item.content.substr(0, 40)}</p>
                <span className={styles.author}> --- {item.author}</span>
              </div>
              <p>
                <Link href={`/blogpost/${item.slug}`}>
                  <button className={styles.readMore}>Read More</button>
                </Link>
              </p>
            </div>
          ))}
        </InfiniteScroll>
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

// This method is used for static site generation
export const getStaticProps = async (context) => {
  const data = await fs.promises.readdir("blogdata");
  const allBlogs = [];
  const allCount = data.length;
  for (let i = 0; i < 4; i++) {
    let item = data[i];
    const filedata = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    allBlogs.push(JSON.parse(filedata));
  }
  return { props: { allBlogs, allCount } };
};

export default Blog;
