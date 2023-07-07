import { AppProps } from "next/app";
import Head from "next/head";
import '../styles/index.css'
export default function MyApp({Component, pageProps}: AppProps) {
    return(
        <>
            <Head>
                <title>Blog-site</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" sizes="16x16" href="favicon.ico" />

            </Head>
            <Component {...pageProps}></Component>
        </>
    )
}