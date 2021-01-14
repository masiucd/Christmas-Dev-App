/* eslint-disable @typescript-eslint/no-var-requires */
import Layout from "@components/layout/layout"
import { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { Hydrate } from "react-query/hydration"
import { ReactQueryDevtools } from "react-query/devtools"

// if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
// require("../mocks/index")
// const { init } = require("../mocks")
// init()
// }

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}
