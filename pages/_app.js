import '../styles/main.css'
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) { // Component - та страница, которую мы отображаем в зависимости от url адреса
  return (
          <>
              <NextNprogress
              color="yellow"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
              />
        <Component {...pageProps} />

          </>
  )
}

export default MyApp
