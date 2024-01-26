import Head from "next/head";
import Image from "next/image";
import Link from "next/Link";
import styles from "../styles/Home.module.css";
import styles1 from "../styles/Home1.module.css";
import styles2 from "../styles/Home2.module.css";
import Dummy from "../components/dummyStyledJsx";

export default function Home() {
  // console.log("styles", styles);
  // console.log("styles1", styles1);
  // console.log("styles2", styles2);
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Post</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
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

      <main className={styles.main}>
        <h2>BlogPost App</h2>
        <Dummy />
        <p className="dummy">Test dummy css</p>
        <article>
          <div>
            <h5 className={styles1.color}>Title</h5>
            <p className={styles2.bgColor}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            </p>
          </div>
        </article>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
