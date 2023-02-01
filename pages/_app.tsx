import type { AppProps } from 'next/app'
import { globalStyles } from '../stitches.config'
import '../styles/app.css'
import {QueryClient,QueryClientProvider,} from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import  store  from '../redux/store';
import { ThemeProvider } from "next-themes";
import { darkTheme } from '../stitches.config'
// Create a client

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    value={{
      light: "light",
      dark: darkTheme.className
    }}
  >
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <ToastContainer/>
            <NextNProgress color='#24CDE2' />

          <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  )
  
}
