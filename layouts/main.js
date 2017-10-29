import Meta from '../components/meta';
import Link from 'next/link';

export default ({ children }) => (
  <div className="main">
    <div className="nav">
      <span className="nav-link">
        <Link href="/" prefetch><a>hc.gg</a></Link>
      </span>

      <span className="nav-link">
        <Link href="/blog" prefetch><a>Blog</a></Link>
      </span>

      <span className="nav-link">
        <Link href="/about" prefetch><a>About</a></Link>
      </span>
    </div>

    { children }

    { /* global styles and meta tags */ }
    <Meta />

    { /* local styles */ }
    <style jsx>{`
      .main {
        padding: 25px 50px;
      }

      .nav {
        padding-bottom: 20px;
        text-align: center;
        border-bottom: 1px solid #EBEBEB;
        margin-bottom: 24px;
      }

      .nav-link {
        padding: 0 15px;
      }

      @media (max-width: 500px) {
        .main {
          padding: 25px 15px;
        }

        .logo {
          padding-bottom: 20px;
        }
      }
    `}</style>
  </div>
)
