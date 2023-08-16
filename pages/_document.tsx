import NextDocument,{ Html, Head, Main, NextScript } from 'next/document'
import {getCssText} from '../stitches.config'
import Script from 'next/script'



export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
      <title>Sequentialjobs</title>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <meta property='og:title' content="      
Sequentialjobs Your Gateway to Exciting Career Opportunities - Find Jobs Online
      " />
      <meta name='description' content="
  Sequential jobs  your dream job and kick-start your career. Browse thousands of job postings, connect with top employers, and apply online. Start your journey with our comprehensive job search platform.
  "  />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
      // strategy="lazyOnload"
      src={`https://embed.tawk.to/${process.env.NEXT_PUBLIC_PROPERTY_ID}/${process.env.NEXT_PUBLIC_WIDTH_ID}`}
    async 
    />
        </body>
      </Html>
    );
  }
}
