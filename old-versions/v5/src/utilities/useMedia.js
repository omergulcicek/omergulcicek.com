// Code from https://usehooks.com/useMedia

import { useEffect, useState } from "react"

export default function useMedia(queries, defaultValue) {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    setValue(queries[0] ? queries[0] : defaultValue)
    return () => setValue()
  })

  return value
}
