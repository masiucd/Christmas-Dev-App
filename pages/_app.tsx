/* eslint-disable @typescript-eslint/no-var-requires */
import Layout from "@components/layout/layout"
import { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { Hydrate } from "react-query/hydration"
import { ReactQueryDevtools } from "react-query/devtools"
import { ThemeProvider } from "@context/theme-context"

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}
