import { useEffect } from "react"

const useTitle = title => {
  useEffect(() => {
document.title = `${title} - Hungry Dev`
  }, [title])
}

export default useTitle;