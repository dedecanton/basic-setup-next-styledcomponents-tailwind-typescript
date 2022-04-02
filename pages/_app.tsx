import '../styles/reset.css'
import type { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import HomeSection from '../components/HomeSection';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <Header/>
      <HomeSection/>

    </>
  );
}

export default MyApp;
