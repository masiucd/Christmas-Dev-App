import { RefObject, useEffect } from "react"

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains((event.target as Node) || null)) {
        return
      }

      handler(event)
    }
    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [handler, ref])
}

export { useClickOutside }
