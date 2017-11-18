// import Page from '../layouts/main'
// import Link from 'next/link'
// import Head from 'next/head'

// export default () => (
//   <Page>
//     <Head>
//       <title>Hamilton Chapman</title>
//     </Head>

//     <div className="home">
//       <div className="main">
//         <img src="/static/img/ham.jpg" id="ham" />

//         <div id="spiel">
//           I’m Hamilton. I build things at{' '}
//           <Link href="https://pusher.com"><a target="_blank" id="pusher">Pusher</a></Link>. Follow me on{' '}
//           <Link href="https://twitter.com/hamchapman"><a target="_blank" id="twitter">Twitter</a></Link>, <br />
//           check out my{' '}
//           <Link href="/blog"><a id="blog">blog</a></Link>, see my code on{' '}
//           <Link href="https://github.com/hamchapman"><a target="_blank" id="github">GitHub</a></Link> or{' '}
//           <Link href="mailto:hamchapman@gmail.com"><a target="_blank" id="email">email</a></Link> me.
//         </div>
//       </div>
//     </div>

//     <style jsx>{`
//       .home {
//         display: flex;
//         justify-content: center;
//         z-index: -1;
//       }

//       #ham {
//         border-radius: 50%;
//         height: 200px;
//         width: 200px;
//         margin: 50px 0;
//       }

//       #spiel {
//         font-size: 3.2rem;
//         font-weight: 200;
//         line-height: 1.4;
//         position: absolute;
//         left: 80px;
//         right: 80px;
//         padding: 0 0 30px;
//       }

//       #twitter {
//         color: #1da1f2;
//         border-bottom-color: #1da1f2;
//       }

//       #github {
//         color: #28a745;
//         border-bottom-color: #28a745;
//       }

//       #blog {
//         color: #e73a29;
//         border-bottom-color: #e73a29;
//       }

//       #email {
//         color: #ffaa1f;
//         border-bottom-color: #ffaa1f;
//       }

//       #pusher {
//         color: #f32cff;
//         border-bottom-color: #f32cff;
//       }

//       .main {
//         text-align: center;
//       }

//       @media (max-width: 600px) {
//         .spiel {
//           left: 15px;
//           right: 15px;
//         }

//         .ham {
//           margin: 0;
//         }
//       }
//     `}</style>
//   </Page>
// )


import glamorous from 'glamorous';
import { rem } from 'polished';

import { Page, Link } from '../components';

const ComingSoon = glamorous('div')({
  position: 'absolute',
  left: '0',
  right: '0',
  padding: `${rem(20)} ${rem(10)} 0`,
  textAlign: 'center',
  fontSize: rem(3.2),
  fontWeight: '200',
});

export default () => (
  <Page>
    <ComingSoon>
      Coming soon. Check out my <Link href="/blog">blog</Link> for now.
    </ComingSoon>
  </Page>
)

