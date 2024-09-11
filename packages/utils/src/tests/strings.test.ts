import { describe, expect, it } from "vitest"

import { capitalize } from "../strings.ts"

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    // Arrange - Given
    const input = "hello, world!"

    // Act - When
    const output = capitalize(input)

    // Assert - Then
    const expected = "Hello, world!"
    expect(output).toEqual(expected)
  })

  it("should return an empty string when the input is an empty string", () => {
    // Arrange - Given
    const input = ""

    // Act - When
    const output = capitalize(input)

    // Assert - Then
    const expected = ""
    expect(output).toEqual(expected)
  })

  it("should return the same string when the first letter is already capitalized", () => {
    // Arrange - Given
    const input = "Hello, world!"

    // Act - When
    const output = capitalize(input)

    // Assert - Then
    const expected = "Hello, world!"
    expect(output).toEqual(expected)
  })
})
