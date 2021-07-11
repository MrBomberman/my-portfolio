import Document, { Html, Head, Main, NextScript } from 'next/document'
// этот документ позволяет нам изменять верстку html и вставлять стили глобально  


class MyDocument extends Document {
  
  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument