import { act, renderHook } from "@testing-library/react"

import { describe, expect, it } from "vitest"
import { useBoolean } from "../useBoolean"

describe("useBoolean", () => {
  const initialValues = [true, false]

  for (const initialValue of initialValues) {
    it(`should set the initial value to ${initialValue}`, () => {
      // Arrange - Given
      const { result } = renderHook(() => {
        return useBoolean({ initialValue })
      })

      // Assert - Then
      expect(result.current.value).toBe(initialValue)
    })
  }

  it("should by default set the initial value to false", () => {
    // Arrange - Given
    const { result } = renderHook(() => {
      return useBoolean()
    })

    // Assert - Then
    expect(result.current.value).toBe(false)
  })

  it("should toggle the value", () => {
    // Arrange - Given
    const { result } = renderHook(() => {
      return useBoolean({ initialValue: false })
    })

    // Act - When
    act(() => {
      return result.current.toggle()
    })

    // Assert - Then
    expect(result.current.value).toBe(true)

    // Act - When
    act(() => {
      return result.current.toggle()
    })

    // Assert - Then
    expect(result.current.value).toBe(false)
  })

  it("should set the value to true", () => {
    // Arrange - Given
    const { result } = renderHook(() => {
      return useBoolean({ initialValue: false })
    })

    // Act - When
    act(() => {
      return result.current.setTrue()
    })

    // Assert - Then
    expect(result.current.value).toBe(true)
  })

  it("should set the value to false", () => {
    // Arrange - Given
    const { result } = renderHook(() => {
      return useBoolean({ initialValue: true })
    })

    // Act - When
    act(() => {
      return result.current.setFalse()
    })

    // Assert - Then
    expect(result.current.value).toBe(false)
  })
})
