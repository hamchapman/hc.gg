import Page from '../layouts/main'
import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Hamilton Chapman</title>
    </Head>

    <div id="coming-soon">
      Coming soon. Check out my <Link href="/blog" prefetch><a>blog</a></Link> for now.
    </div>

    <style jsx>{`
      #coming-soon {
        position: absolute;
        left: 0;
        right: 0;
        padding: 40px 20px 0;
        text-align: center;
        font-size: 3.2rem;
        font-weight: 200;
      }
    `}</style>
  </Page>
)
