import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/BlogPost.module.css";

// Step1: Find the file corresponding to the slug.
// Step2: Populate them inside the page.
const slug = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3>Title of the page: {slug}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam
          atque quo nesciunt ad reprehenderit deleniti maxime quae, eos harum
          commodi odit vel illo non placeat dignissimos molestiae at beatae
          expedita repellendus aut perspiciatis? Reiciendis sed accusamus itaque
          libero eum fugit, voluptatibus recusandae mollitia unde vitae hic
          laudantium sapiente quos quaerat eos voluptas inventore voluptatem?
        </p>
      </main>
    </div>
  );
};

export default slug;
