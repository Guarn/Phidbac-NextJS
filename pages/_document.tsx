import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="shortcut icon" href="/favicon.jpg" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#e2e0d8" />
          <link
            rel="preload"
            href="https://use.typekit.net/af/471ad1/00000000000000003b9b1f20/27/l?subset_id=2&fvd=n7&v=3"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://use.typekit.net/af/afc5c6/00000000000000003b9b1f23/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="apple-touch-icon" href="/APPLETOUCH.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
