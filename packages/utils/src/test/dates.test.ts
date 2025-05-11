import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { getISODate } from "../dates.ts"

describe("dates", () => {
  describe("getISODate", () => {
    it("should return the correct date in ISO format (e.g: 2012-05-23)", () => {
      // Arrange - Given
      const input = new Date("2012-05-23")

      // Act - When
      const output = getISODate(input)

      // Assert - Then
      const expected = "2012-05-23"
      assert.strictEqual(output, expected)
    })
  })
})
