import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import LayoutWrapper from '../components/LayoutWrapper'
import Analytics from '../components/Analytics'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (<ThemeProvider attribute="class">
  <Head>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
  </Head>
  {/* {isDevelopment && isSocket && <ClientReload />} */}
  <Analytics />
  <LayoutWrapper>
    <Component {...pageProps} />
  </LayoutWrapper>
</ThemeProvider>)
}

export default MyApp
