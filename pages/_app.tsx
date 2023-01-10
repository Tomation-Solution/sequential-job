import type { AppProps } from 'next/app'
import { globalStyles } from '../stitches.config'
import '../styles/app.css'
import {QueryClient,QueryClientProvider,} from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify';


// Create a client

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <QueryClientProvider client={queryClient}>
        <ToastContainer/>

      <Component {...pageProps} />
  <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
  
}
