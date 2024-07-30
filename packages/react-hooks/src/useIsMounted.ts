import { useEffect, useState } from "react"

export interface UseIsMountedOutput {
  isMounted: boolean
}

export const useIsMounted = (): UseIsMountedOutput => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return { isMounted }
}
