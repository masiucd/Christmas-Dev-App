import { getJoke } from "@utils/swr"
import { Joke } from "@utils/types"
import { QueryObserverResult, RefetchOptions, useQuery } from "react-query"

interface UseJoke {
  joke: Partial<Joke> | undefined
  isLoading: boolean
  error: unknown // TODO change type
  status: "idle" | "error" | "loading" | "success"
  refetchJoke: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<Joke, unknown>>
}

const URL = "https://icanhazdadjoke.com"

export const useJoke = (initialData: Joke): UseJoke => {
  // console.log("initialData", initialData)
  // const { data, error, mutate } = useSWR(URL, fetcher, {
  // pre-fetched data as the initial value to the initialData option.
  // initialData,
  // })

  const { status, data, error, isLoading, refetch } = useQuery(
    "joke",
    () => getJoke(URL),
    {
      initialData,
    }
  )

  return {
    joke: data,
    isLoading,
    error,
    status,
    refetchJoke: refetch,
  }
}
