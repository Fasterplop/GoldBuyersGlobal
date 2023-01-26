import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return ( 
  
    <>

      <Head>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  

  
  
  );
}
