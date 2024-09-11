import { renderHook } from "@testing-library/react"

import { describe, expect, it } from "vitest"
import { useIsMounted } from "../useIsMounted.ts"

describe("useIsMounted", () => {
  it("should return true", () => {
    // Arrange - Given
    const { result } = renderHook(() => {
      return useIsMounted()
    })

    // Assert - Then
    expect(result.current.isMounted).toBe(true)
  })
})
