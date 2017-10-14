import Head from 'next/head'
import Router from 'next/router'

// import NProgress from 'nprogress'

// Router.onRouteChangeStart = () => NProgress.start()
// Router.onRouteChangeComplete = () => NProgress.done()
// Router.onRouteChangeError = () => NProgress.done()

/* loading progress bar styles */
// #nprogress {
//   pointer-events: none;
// }
// #nprogress .bar {
//   background: #22BAD9;
//   position: fixed;
//   z-index: 1031;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 2px;
// }
// #nprogress .peg {
//   display: block;
//   position: absolute;
//   right: 0px;
//   width: 100px;
//   height: 100%;
//   box-shadow: 0 0 10px #22BAD9, 0 0 5px #22BAD9;
//   opacity: 1.0;
//   transform: rotate(3deg) translate(0px, -4px);
// }

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    { /* global styles */ }
    <style jsx global>{`
      a {
        color: #3F3F3F;
        text-decoration: none;
        border-bottom-color: rgba(242,108,126,0.3);
        border-bottom-style: solid;
        border-bottom-width: 2px;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        padding-bottom: 2px;
      }

      a:hover {
        border-bottom-color: rgba(242,108,126,0.6);
      }

      * {
        margin: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, "Open Sans", "Helvetica Neue", sans-serif;
        max-width: 650px;
        margin: auto;
        font-size: 1.1rem;
        color: rgba(90, 90, 90, 1);
      }

      h1, h2, h3, h4 {
        color: #504959;
      }

      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      h3 {
        font-size: 1.3rem;
      }

      h4 {
        font-size: 1.2rem;
      }
    `}</style>
  </div>
)
