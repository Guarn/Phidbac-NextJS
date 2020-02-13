import React from "react";
import NextApp from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,body, #__next {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #e2e0d8;
    font-family: "century-gothic";
    font-size: 16px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    line-height:24px;
    @media (max-width:767px) {
      overflow: initial;
    }
  }
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  .Pop-LienWeb > .ant-popover-content > .ant-popover-inner {
    background-color: #5e5e5e;
    padding: 0px;
  }

  .Pop-LienWeb > .ant-popover-content > .ant-popover-arrow {
    border-right-color: #5e5e5e;
    border-bottom-color: #5e5e5e;
  }

  @font-face {
    font-family: "century-gothic";
    src: local("Century Gothic"), local("century-gothic"),
        url("https://use.typekit.net/af/471ad1/00000000000000003b9b1f20/27/l?subset_id=2&fvd=n7&v=3")
            format("woff2"),
        url("https://use.typekit.net/af/471ad1/00000000000000003b9b1f20/27/d?subset_id=2&fvd=n7&v=3")
            format("woff"),
        url("https://use.typekit.net/af/471ad1/00000000000000003b9b1f20/27/a?subset_id=2&fvd=n7&v=3")
            format("opentype");
    font-display: swap;
    font-style: normal;
    font-weight: 100;
}
@font-face {
    font-family: "century-gothic";
    src: url("https://use.typekit.net/af/85a471/00000000000000003b9b1f21/27/l?subset_id=2&fvd=i7&v=3")
            format("woff2"),
        url("https://use.typekit.net/af/85a471/00000000000000003b9b1f21/27/d?subset_id=2&fvd=i7&v=3")
            format("woff"),
        url("https://use.typekit.net/af/85a471/00000000000000003b9b1f21/27/a?subset_id=2&fvd=i7&v=3")
            format("opentype");
    font-display: swap;
    font-style: italic;
    font-weight: 700;
}

@font-face {
    font-family: "century-gothic";
    src: url("https://use.typekit.net/af/fb6c60/00000000000000003b9b1f22/27/l?subset_id=2&fvd=i4&v=3")
            format("woff2"),
        url("https://use.typekit.net/af/fb6c60/00000000000000003b9b1f22/27/d?subset_id=2&fvd=i4&v=3")
            format("woff"),
        url("https://use.typekit.net/af/fb6c60/00000000000000003b9b1f22/27/a?subset_id=2&fvd=i4&v=3")
            format("opentype");
    font-display: swap;
    font-style: italic;
    font-weight: 400;
}

@font-face {
    font-family: "century-gothic";
    src: url("https://use.typekit.net/af/afc5c6/00000000000000003b9b1f23/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3")
            format("woff2"),
        url("https://use.typekit.net/af/afc5c6/00000000000000003b9b1f23/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3")
            format("woff"),
        url("https://use.typekit.net/af/afc5c6/00000000000000003b9b1f23/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3")
            format("opentype");
    font-display: swap;
    font-style: normal;
    font-weight: 400;
}

`;

const theme = {
  main: "#5e5e5e",
  texteSecondaryColor: "#b82828",
  background: "#e2e0d8"
};

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
