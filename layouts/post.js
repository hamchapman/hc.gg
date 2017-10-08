import Page from './main'

export default ({ children }) => (
  <Page>
    <article>
      { children }
    </article>
    <style jsx>{`
      article {

      }


    `}</style>
    <style jsx global>{`
      body {
        width: 100%;
        overflow-x: hidden;
      }
    `}</style>
  </Page>
)
