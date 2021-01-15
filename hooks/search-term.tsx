import { Joke, Status } from "@utils/types"
import { useQuery } from "react-query"
import { getJokes } from "@utils/swr"

interface SearchTerm {
  jokes: (Joke | undefined)[] | undefined
  status: Status
  error: Error
  isFetching: boolean
}

export const useSearchTerm = (termText: string): SearchTerm => {
  const { data, error, status, isFetching } = useQuery(
    ["search-joke", termText],
    getJokes,
    {
      enabled: termText.length > 0,
    }
  )
  const err = error as Error
  return {
    jokes: data,
    status,
    error: err,
    isFetching,
  }
  // const URL = `${BASE_URL}/search?term=${termText}`

  // const { data, error, status } = useQuery("search-joke", () => getJokes(URL))

  // return {
  //   jokes: data,
  //   status,
  //   error,
  // }
}
