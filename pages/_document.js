import Document, { Html, Head, Main, NextScript } from 'next/document'
// этот документ позволяет нам изменять верстку html и вставлять стили глобально  


class MyDocument extends Document {
  
  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/brands.css" rel="stylesheet"/>
        <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.css' rel='stylesheet'/> 
        {/* <link href="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></link> */}
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