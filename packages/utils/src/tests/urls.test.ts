import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { LOCALE_DEFAULT } from "../constants.ts"
import { getPathnameWithoutLocale } from "../urls.ts"

describe("urls", () => {
  describe("getPathnameWithoutLocale", () => {
    it("should return the pathname without the known locale prefix", () => {
      // Arrange - Given
      const input = `/${LOCALE_DEFAULT}/about`

      // Act - When
      const output = getPathnameWithoutLocale(input)

      // Assert - Then
      const expected = "/about"
      assert.strictEqual(output, expected)
    })

    it("should return the same pathname when the input does not start with a known locale prefix", () => {
      // Arrange - Given
      const input = "/about"

      // Act - When
      const output = getPathnameWithoutLocale(input)

      // Assert - Then
      const expected = "/about"
      assert.strictEqual(output, expected)
    })

    it("should return the same pathname when the input starts with an unknown locale prefix", () => {
      // Arrange - Given
      const input = "/abc-ABC/about"

      // Act - When
      const output = getPathnameWithoutLocale(input)

      // Assert - Then
      const expected = "/abc-ABC/about"
      assert.strictEqual(output, expected)
    })

    it("should return the index route when the input is an empty string", () => {
      // Arrange - Given
      const input = ""

      // Act - When
      const output = getPathnameWithoutLocale(input)

      // Assert - Then
      const expected = "/"
      assert.strictEqual(output, expected)
    })

    it("should return the index route when the input starts with a known locale prefix and with a trailing slash", () => {
      // Arrange - Given
      const input = `/${LOCALE_DEFAULT}/`

      // Act - When
      const output = getPathnameWithoutLocale(input)

      // Assert - Then
      const expected = "/"
      assert.strictEqual(output, expected)
    })

    it("should return the index route when the input starts with a known locale prefix and without a trailing slash", () => {
      // Arrange - Given
      const input = `/${LOCALE_DEFAULT}`

      // Act - When
      const output = getPathnameWithoutLocale(input)

      // Assert - Then
      const expected = "/"
      assert.strictEqual(output, expected)
    })
  })
})
