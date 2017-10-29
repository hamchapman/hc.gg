import Page from './main'

export default ({ children }) => (
  <Page>
    <article>
      { children }
    </article>
    <style jsx global>{`
      body {
        width: 100%;
        overflow-x: hidden;
      }

      blockquote {
        padding-left: 16px;
        border-left: 3px solid #eee;
        margin: 10px 0;
      }

      pre {
        padding: 16px 6px;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        background-color: #fdfdfd;
      }

      p {
        margin: 12px 0;
        line-height: 1.8rem;
      }

      ul {
        margin-bottom: 12px;
      }

      hr {
        background-color: red;
        height: 1px;
        border-top: none;
        border-bottom: 1px solid #EBEBEB;
        margin: 24px 0;
      }

      h1 {
        margin-bottom: 20px;
      }

      h2 {
        margin-top: 8px;
        margin-bottom: 16px;
      }

      h3, h4 {
        margin-top: 8px;
        margin-bottom: 12px;
      }
    `}</style>
  </Page>
)
