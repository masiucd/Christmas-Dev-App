import SearchTerm from "@components/joke/search-term"
import axios from "axios"
import { Joke } from "./types"

const BASE_URL = "https://icanhazdadjoke.com"
export const jokeFetcher = (url: string) =>
  axios.get(url, { headers: { Accept: "application/json" } }).then((res) => res.data)

export const axiosFetcher = (url: string) => axios.get(url).then((res) => res.data)

export const getJoke = async (url: string) => {
  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
    },
  })
  const data: Partial<Joke | Joke[]> = await response.data
  return data
}

export const getJokes = async ({ queryKey }: { queryKey: string[] }) => {
  const URL = `${BASE_URL}/search?term=${queryKey[queryKey.length - 1]}`

  const response = await axios.get(URL, {
    headers: {
      Accept: "application/json",
    },
  })
  const data: Partial<Joke[]> = await response.data.results
  return data
}
