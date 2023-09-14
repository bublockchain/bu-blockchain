import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242637/TrackballProjectorDetector.js"></Script>
        <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242637/AsciiEffect.js"></Script>
        <link rel="shortcut icon" href="/bublogo.ico" />
        <title>BU Blockchain</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
