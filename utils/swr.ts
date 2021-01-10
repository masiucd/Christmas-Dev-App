export const jokeFetcher = (url: string, headerValue: string) =>
  fetch(url, { headers: { Accept: headerValue } }).then((r) => r.json())
