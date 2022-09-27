import Document, { Html, Head, Main, NextScript } from 'next/document';
import { googleTrackingID } from '../config/config';

class MyDocument extends Document {

  constructor(props) {
    super(props)
  }

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel='icon' href='/icon-128x128.png' type='image/png' sizes='16x16' />
          <link rel='icon' href='/icon-128x128.png' type='image/png' sizes='32x32' />
          <link rel="apple-touch-icon" href="/icon-128x128.png" />
          <link rel="profile" href="https://gmpg.org/xfn/11" />

          <meta name="theme-color" content="#01B2FF" />
          <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

          <meta name="msvalidate.01" content="421EF58C84A43E2FBE97EE717D34055B" />
          <meta name="google-site-verification" content="thNX4PqJPze1BpW90iuCTwRTZU8VbBqJuGCOCpodGbg" />
          <meta name="yandex-verification" content="266b97c075d46b34" />

          <link rel='dns-prefetch' href='//www.googletagmanager.com' />
          <link rel='dns-prefetch' href='//fonts.googleapis.com' />
          <link rel='dns-prefetch' href='//s.w.org' />
          <link rel="alternate" type="application/rss+xml" title="Update Tech Limited. &raquo; Feed" href="https://example.com/feed/" />
          <link rel="alternate" type="application/rss+xml" title="Update Tech Limited. &raquo; Comments Feed" href="https://example.com/comments/feed/" />
          <link rel="alternate" type="application/rss+xml" title="Update Tech Limited. &raquo; Home Comments Feed" href="https://example.com/home/feed/" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {!this.props.__NEXT_DATA__.query.amp &&
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingID}`}
            />
          }

          {!this.props.__NEXT_DATA__.query.amp &&
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
                    gtag('set', 'linker', {"domains":["www.example.com"]} );
                    gtag("js", new Date());
                    gtag("set", "developer_id.dZTNiMT", true);
                    gtag("config", "${googleTrackingID}", {"anonymize_ip":true});
                `,
              }}
            />
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
