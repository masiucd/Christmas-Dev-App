import { useEffect } from "react"
import { useLocalStorage } from "./local-storage"

function useTheme(themeKey = "theme", themeValue = "light") {
  const { value, setValue } = useLocalStorage(themeKey, themeValue)

  const handleTheme = () => {
    const nextTheme = value === "light" ? "dark" : "light"
    setValue(nextTheme)
  }

  useEffect(() => {
    document.body.dataset.theme = value
  }, [value])

  return { value, setValue, handleTheme }
}

export { useTheme }
