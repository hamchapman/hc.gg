import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';

/* eslint-disable react/no-danger */

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Hamilton Chapman</title>
          <meta name="viewport" content="width=device-width" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Head>
        <body
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
        >
          <Main />
          <NextScript />
        </body>
        <style>
          {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html,
          body {
            height: 100%;
            width: 100%;
            color: #2B303B;
            font-size: 16px;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html {
            height: 100%;
          }
          body {
            height: 100%;
            background-color: #FFFFFF;
          }
        `}
        </style>
      </html>
    );
  }
}

/* eslint-enable react/no-danger */
