import '../styles/globals.css';
import {AppProps} from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import React from "react";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Alley</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                {/*<link rel="preconnect" href="https://fonts.googleapis.com"/>*/}
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
