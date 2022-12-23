import type { AppProps } from 'next/app'
import { globalStyles } from '../stitches.config'
import '../styles/app.css'
export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}
