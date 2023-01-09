import type { AppProps } from 'next/app'
import { globalStyles } from '../stitches.config'
import '../styles/app.css'
import {

  useQuery,

  useMutation,

  useQueryClient,

  QueryClient,

  QueryClientProvider,

} from 'react-query'




// Create a client

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <QueryClientProvider client={queryClient}>

      <Component {...pageProps} />

    </QueryClientProvider>
  )
  
}
