import { Router } from "next/router";
import 'react-loading-skeleton/dist/skeleton.css'
import "../assets/sass/main.scss";
import '../assets/styles.css';

export default function App({ Component, pageProps }) {
  Router.events.on("routeChangeStart", (url) => {
    console.log("Loading...");
  });
  return <Component {...pageProps} />;
}
