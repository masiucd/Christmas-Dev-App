import axios from "axios"

export const jokeFetcher = (url: string) =>
  axios.get(url, { headers: { Accept: "application/json" } }).then((res) => res.data)

export const axiosFetcher = (url: string) => axios.get(url).then((res) => res.data)

// export const jokeFetcher = (url: string, headerValue: string) =>
//   fetch(url, { headers: { Accept: headerValue } }).then((r) => r.json())

// const fetcher = url =>
//   fetch(url, {
//     headers: {
//       Accept: 'application/json',
//     },
//   }).then(res => res.json())
