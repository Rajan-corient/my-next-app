import Navbar from "../components/navbar";
import "../styles/globals.css";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  // return <div>Rajan Gupta</div>;
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
