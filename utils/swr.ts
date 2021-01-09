// declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
export const fetcher = <T>(...args: T[]) => fetch(...args).then((res) => res.json())
