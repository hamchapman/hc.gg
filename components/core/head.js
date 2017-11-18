import Head from 'next/head'

export default ({ title='Ham Chapman', description='Ham Chapman\'s website', background }) =>
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
    <title>{title ? `${title} | Ham Chapman` : 'Ham Chapman'}</title>
    <meta name="author" content="Ham Chapman" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        color: #2B303B;
        font-size: 16px;
        font-family: Roboto, sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      html {
        height: 100%;
      }
      body {
        height: 100%;
        background-color: ${background || '#FFFFFF'};
      }
    `}</style>
  </Head>
