// import Page from '../layouts/main'
// import Link from 'next/link'
// import Head from 'next/head'

// import { posts } from '../posts'

// export default () => (
//   <Page>
//     <Head>
//       <title>Blog</title>
//     </Head>
//     <ul className="posts">
//       {
//         posts.map(({ id, date, title, subtitle }) => (
//           <PostLink
//             id={id}
//             key={id}
//             date={date}
//             title={title}
//             subtitle={subtitle}
//           />
//         ))
//       }
//     </ul>
//     <style jsx>{`
//       ul {
//         padding: 0;
//         margin: 0;
//       }
//     `}</style>
//   </Page>
// )

// const PostLink = ({ id, date, title, subtitle }) => (
//   <Link href={`/p/${id}`} prefetch>
//     <li>
//       <div className="titular">
//         <div className="title">
//           <span>
//             { title }
//           </span>
//         </div>
//         <div className="subtitle">
//           <span>
//             { subtitle }
//           </span>
//         </div>
//       </div>

//       <div className="date">{ date }</div>

//       <style jsx>{`
//         li {
//           overflow: hidden;
//           list-style: none;
//           padding-bottom: 12px;
//           border-bottom: 1px solid #EBEBEB;
//           margin-bottom: 12px;
//         }

//         li:hover {
//           cursor: pointer;
//         }

//         .title span, .subtitle span {
//           padding-bottom: 2px;
//           border-bottom: 2px solid #fff;
//         }

//         .titular {
//           float: left;
//           width: calc(100% - 142px);
//           line-height: 1.3;
//         }

//         .title {
//           font-size: 1.6rem;
//           margin-bottom: 6px;
//         }

//         .subtitle {
//           color: rgba(173, 180, 181, 0.6);
//           font-size: 1.2rem;
//         }

//         li:hover .title span {
//           border-bottom-color: rgba(242, 108, 126, 0.9);
//         }

//         li:hover .subtitle span {
//           border-bottom-color: rgba(242, 108, 126, 0.5);
//         }

//         .date {
//           width: 142px;
//           text-align: right;
//           color: #999;
//           float: right;
//           padding-top: 20px;
//         }

//         a {
//           text-decoration: none;
//         }

//         @media (max-width: 500px) {
//           .titular, .date {
//             width: 100%;
//             float: none;
//             text-align: left;
//           }

//           .date {
//             margin-top: 12px;
//             padding-top: 0;
//           }
//         }
//       `}</style>
//     </li>
//   </Link>
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
