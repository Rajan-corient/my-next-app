import Navbar from "../components/navbar";
import "../styles/globals.css";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  // return <div>Rajan Gupta</div>;
  return (
    <>
      <Navbar
        style={{ background: "#000", color: "#fff", padding: "1rem 0rem" }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
