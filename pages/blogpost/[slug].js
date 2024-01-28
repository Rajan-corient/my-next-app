import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/BlogPost.module.css";

// Step1: Find the file corresponding to the slug.
// Step2: Populate them inside the page.
const Slug = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blog, setBlog] = useState(props.myBlog.res);

  // Below code is used for Client Side Rendering
  // const [blog, setBlog] = useState(null);
  // const router = useRouter();
  // const { slug } = router.query;
  // console.log("slug", slug);

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   getBlogData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [router.isReady]);

  // const getBlogData = async () => {
  //   const apiUrl = `http://localhost:3000/api/getblog?slug=${slug}`;
  //   const res = await fetch(apiUrl);
  //   const data = await res.json();
  //   setBlog(data.res);
  //   console.log("data", data);
  // };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3>{blog?.title}</h3>
        <p>{blog?.content}</p>
      </main>
    </div>
  );
};

// This method is used for server side rendering
// This gets called on every request
// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   const { slug } = context.query;
//   const apiUrl = `http://localhost:3000/api/getblog?slug=${slug}`;
//   const res = await fetch(apiUrl);
//   const myBlog = await res.json();
//   console.log("myBlog", myBlog);

//   // Pass data to the page via props
//   return { props: { myBlog } };
// }

// These method is used for static side generation

// This method is used for static side generation
export const getStaticPaths = async (context) => {
  return {
    paths: [
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-next" } },
      { params: { slug: "how-to-learn-react" } },
    ],
    fallback: true, // false or blocking
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const myBlog = fs.promises.readFile(`blogdata/${slug}.json`, "utf8");
  return { props: { myBlog: JSON.parse(myBlog) } };
};

export default Slug;
