import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   
  render() {
    return (
      <Html lang='en' class="DA">
        <Head>
        
        </Head>
        <body className='bg-gradient-to-r from-green-500 to-blue-400'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument