import Navbar from "../components/navbar";
import "../styles/globals.css";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  console.log("app js is loading");
  // return <div>Rajan Gupta</div>;
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
