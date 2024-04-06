import { useEffect, useState } from "react"

export interface UseIsMountedResult {
  isMounted: boolean
}

export const useIsMounted = (): UseIsMountedResult => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return { isMounted }
}
