import Page from '../layouts/main'
import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Hamilton Chapman</title>
    </Head>

    <div className="home">
      <div className="main">
        <img src="/static/img/ham.jpg" className="ham" />

        <div className="spiel">
          <Link href="https://twitter.com/hamchapman"><a>Twitter</a></Link>
          <Link href="mailto:hamchapman@gmail.com"><a>Email</a></Link>
        </div>
      </div>
    </div>

    <style jsx>{`
      .home {
        display: flex;
        justify-content: center;
        z-index: -1;
      }

      .ham {
        border-radius: 50%;
        height: 200px;
        width: 200px;
      }

      .main {
        flex: none;
        text-align: center;
      }
    `}</style>
  </Page>
)
