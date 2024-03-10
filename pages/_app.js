import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/globals.css";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  // console.log("[INFO] App is running");
  return (
    <>
      <Navbar
        style={{ background: "#000", color: "#fff", padding: "1rem 0rem" }}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
