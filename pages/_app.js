import MainNav from "@components/MainNav";
import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainNav />
      <Component {...pageProps} />
    </>
  )
}

export default Application
