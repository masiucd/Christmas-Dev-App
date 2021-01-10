import useSWR from "swr"
import { jokeFetcher as fetcher } from "@utils/swr"
import { Joke } from "@utils/types"

interface UseJoke {
  joke: Joke
  isLoading: boolean
  isError: Error
}

export const useJoke = (): UseJoke => {
  const { data, error } = useSWR(
    ["https://icanhazdadjoke.com", "application/json"],
    fetcher
  )

  return {
    joke: data,
    isLoading: !error && !data,
    isError: error,
  }
}
