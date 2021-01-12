import axios from "axios"

export const jokeFetcher = (url: string, headerValue: string) =>
  axios.get(url, { headers: { Accept: headerValue } }).then((res) => res.data)

export const axiosFetcher = (url: string) => axios.get(url).then((res) => res.data)

// export const jokeFetcher = (url: string, headerValue: string) =>
//   fetch(url, { headers: { Accept: headerValue } }).then((r) => r.json())
