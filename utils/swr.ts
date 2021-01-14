import axios from "axios"
import { Joke } from "./types"

export const jokeFetcher = (url: string) =>
  axios.get(url, { headers: { Accept: "application/json" } }).then((res) => res.data)

export const axiosFetcher = (url: string) => axios.get(url).then((res) => res.data)

export const getJoke = async (url: string) => {
  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
    },
  })
  const data: Partial<Joke> = await response.data
  return data
}
