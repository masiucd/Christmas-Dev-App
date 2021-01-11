import useSWR from "swr"
import { jokeFetcher as fetcher } from "@utils/swr"
import { Joke } from "@utils/types"

interface UseJoke {
  joke: Joke
  isLoading: boolean
  isError: Error
}

export const useJoke = (configureRefresh: boolean, initialData: Joke): UseJoke => {
  const { data, error } = useSWR(
    ["https://icanhazdadjoke.com", "application/json"],
    fetcher,
    {
      refreshInterval: configureRefresh ? 1000 : 0,
      // pre-fetched data as the initial value to the initialData option.
      initialData,
    }
  )

  return {
    joke: data,
    isLoading: !error && !data,
    isError: error,
  }
}
