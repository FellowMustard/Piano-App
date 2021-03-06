import Header from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}

export default MyApp;
