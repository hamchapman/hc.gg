import Page from '../layouts/main'
import Link from 'next/prefetch'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Hamilton Chapman</title>
    </Head>

    <div className="blocks">
      <div className="block">
        <div className="blockTitle">Key presses</div>
        <div className="blockValue">1021</div>
      </div>

      <div className="block">
        <div className="blockTitle">Mouse clicks</div>
        <div className="blockValue">456</div>
      </div>

      <div className="block">
        <div className="blockTitle">Steps</div>
        <div className="blockValue">13533</div>
      </div>

      <div className="block">
        <div className="blockTitle">Flights climbed</div>
        <div className="blockValue">11</div>
      </div>

      <div className="block">
        <div className="blockTitle">Age</div>
        <div className="blockValue">25.213131 years</div>
      </div>

      <div className="block">
        <div className="blockTitle">Latitude</div>
        <div className="blockValue">4.213131</div>
      </div>

      <div className="block">
        <div className="blockTitle">Longitude</div>
        <div className="blockValue">44.213131</div>
      </div>

      <div className="block">
        <div className="blockTitle">Location</div>
        <div className="blockValue">Pusher HQ</div>
      </div>

      <div className="block">
        <div className="blockTitle">Active app</div>
        <div className="blockValue">Xcode</div>
      </div>

    </div>

    <style jsx>{`
      .blocks {

      }
      .block {

      }
      .blockTitle {

      }
      .blockValue {

      }
    `}</style>
  </Page>
)
