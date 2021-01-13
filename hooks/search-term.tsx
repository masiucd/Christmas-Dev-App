import { jokeFetcher as fetcher } from "@utils/swr"
import useSWR from "swr"

const BASE_URL = "https://icanhazdadjoke.com"

export const useSearchTerm = (termText: string) => {
  // https://icanhazdadjoke.com/search?term=apa
  const url = `${BASE_URL}/search?term=${termText}`

  const { data, error } = useSWR(url, fetcher)
  // const { data, error } = useSWR(`/search?term=${termText}`, fetcher)

  return {
    term: data,
    isLoading: !error && !data,
  }
}
