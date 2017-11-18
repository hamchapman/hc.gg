import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { renderStatic } from 'glamor/server';

/* eslint-disable react/no-danger */

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = renderStatic(() => page.html);
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
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

/* eslint-enable react/no-danger */
