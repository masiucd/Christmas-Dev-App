/* eslint-disable @typescript-eslint/no-var-requires */
import Layout from "@components/layout/layout"
import { AppProps } from "next/app"

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  // require("../mocks")
  const { init } = require("../mocks")
  init()
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
