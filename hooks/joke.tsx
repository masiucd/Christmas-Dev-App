import useSWR from "swr"
import { jokeFetcher as fetcher } from "@utils/swr"
import { Joke } from "@utils/types"

interface UseJoke {
  joke: Joke
  isLoading: boolean
  isError: Error
  refresh: (data?: Joke, shouldRevalidate?: boolean | undefined) => Promise<Joke>
}

const URL = "https://icanhazdadjoke.com"

export const useJoke = (initialData: Joke): UseJoke => {
  const { data, error, mutate } = useSWR(URL, fetcher, {
    // pre-fetched data as the initial value to the initialData option.
    initialData,
  })

  return {
    joke: data,
    isLoading: !error && !data?.joke,
    isError: error,
    refresh: mutate,
  }
}

// import useSWR from 'swr'

// const BASE_URL = 'https://icanhazdadjoke.com'

// const fetcher = url =>
//   fetch(url, {
//     headers: {
//       Accept: 'application/json',
//     },
//   }).then(res => res.json())

// export const useRandomJoke = () => {
//   const { data, error, mutate } = useSWR(BASE_URL, fetcher)

//   return {
//     joke: data?.joke,
//     loading: !data?.joke && !error,
//     error: error,
//     refresh: () => mutate(BASE_URL),
//   }
// }
