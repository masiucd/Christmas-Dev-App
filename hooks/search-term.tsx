import { jokeFetcher as fetcher } from "@utils/swr"
import useSWR from "swr"

const BASE_URL = "https://icanhazdadjoke.com"

interface SearchTerm {
  term: string[] | []
  isLoading: boolean
  error: Error
}

export const useSearchTerm = (termText: string): SearchTerm => {
  // https://icanhazdadjoke.com/search?term=apa
  const URL = `${BASE_URL}/search?term=${termText}`

  const { data, error } = useSWR(URL, fetcher)

  return {
    term: data,
    isLoading: !error && !data,
    error,
  }
}
