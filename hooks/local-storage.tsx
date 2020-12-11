import { useEffect, useState } from "react"

const useLocalStorage = (key: string, defaultValue: string) => {
  const storedItem =
    typeof window !== "undefined" ? window.localStorage.getItem(key) : null

  const [value, setValue] = useState(storedItem || defaultValue)

  useEffect(() => {
    if (!storedItem) {
      setValue(defaultValue)
    }
    window.localStorage.setItem(key, value)
  }, [key, storedItem, defaultValue, value])

  return { value, setValue }
}

export { useLocalStorage }
