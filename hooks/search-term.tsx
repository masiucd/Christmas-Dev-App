import { axiosFetcher as fetcher } from "@utils/swr"
import useSWR from "swr"

export const useSearchTerm = (termText: string) => {
  // https://icanhazdadjoke.com/search?term=apa
  const { data, error } = useSWR(`/search?term=${termText}`, fetcher)

  return {
    term: data,
    isLoading: !error && !data,
  }
}
