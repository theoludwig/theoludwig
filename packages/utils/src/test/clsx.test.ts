import assert from "node:assert/strict"
import { describe, it } from "node:test"
import type { ClassValue } from "../clsx.ts"
import { clsx } from "../clsx.ts"

describe("clsx", () => {
  describe("strings", () => {
    it("should return empty string for empty input", () => {
      // Arrange - Given
      const input: ClassValue[] = [""]

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "")
    })

    it("should return the string as-is", () => {
      // Arrange - Given
      const input: ClassValue[] = ["foo"]

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "foo")
    })

    it("should join multiple strings with space", () => {
      // Arrange - Given
      const input: ClassValue[] = ["foo", "bar"]

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "foo bar")
    })

    it("should skip falsy values between strings", () => {
      // Arrange - Given
      const input: ClassValue[] = ["foo", false, "bar", null, "baz"]

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "foo bar baz")
    })
  })

  describe("objects", () => {
    it("should return empty string for empty object", () => {
      // Arrange - Given
      const input: ClassValue[] = [{}]

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "")
    })

    it("should include keys with truthy values", () => {
      // Arrange - Given
      const input: ClassValue[] = [{ foo: true, bar: false }]

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "foo")
    })

    it("should exclude keys with falsy values (0, null, false)", () => {
      // Arrange - Given
      const input: ClassValue[] = [{ foo: 1, bar: 0, baz: 1 }]

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "foo baz")
    })

    it("should join keys from multiple objects", () => {
      // Arrange - Given
      const input: ClassValue[] = [{ foo: 1 }, { bar: 2 }]

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "foo bar")
    })

    it("should handle null between objects", () => {
      // Arrange - Given
      const input: ClassValue[] = [{ foo: 1 }, null, { baz: 1, bat: 0 }]

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "foo baz")
    })
  })

  describe("mixed", () => {
    it("should handle strings and objects together", () => {
      // Arrange - Given
      const input: ClassValue[] = ["hello", { world: 1, push: true }]

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "hello world push")
    })

    it("should ignore non-string/object values", () => {
      // Arrange - Given
      const input: ClassValue[] = [undefined, "hello", null, true]

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "hello")
    })

    it("should return empty string with no arguments", () => {
      // Arrange - Given
      const input: ClassValue[] = []

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "")
    })

    it("should not append empty string with separator after a non-empty token", () => {
      // Arrange - Given
      const input: ClassValue[] = ["foo", ""]

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "foo")
    })

    it("should exclude object keys whose value is null, undefined, or empty string", () => {
      // Arrange - Given
      const input: ClassValue[] = [{ a: null, b: undefined, c: "", d: "ok" }]

      // Act - When
      const output = clsx(input)

      // Assert - Then
      assert.strictEqual(output, "d")
    })
  })
})
