import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { getAge, getISODate } from "../dates.ts"

describe("getISODate", () => {
  it("should return the correct date in ISO format (e.g: 2012-05-23)", () => {
    // Arrange - Given
    const input = new Date("2012-05-23")

    // Act - When
    const output = getISODate(input)

    // Assert - Then
    const expected = "2012-05-23"
    expect(output).toEqual(expected)
  })
})

describe("getAge", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("should return the correct age based on the birth date", () => {
    // Arrange - Given
    vi.setSystemTime(new Date("2018-03-20"))
    const birthDate = new Date("1980-02-20")

    // Act - When
    const output = getAge(birthDate)

    // Assert - Then
    const expected = 38
    expect(output).toEqual(expected)
  })

  it("should return the correct age based on the birth date when the birthday has not happened yet", () => {
    // Arrange - Given
    vi.setSystemTime(new Date("2018-03-20"))
    const birthDate = new Date("1980-07-20")

    // Act - When
    const output = getAge(birthDate)

    // Assert - Then
    const expected = 37
    expect(output).toEqual(expected)
  })

  it("should return the correct age based on the birth date when the birthday is today", () => {
    // Arrange - Given
    vi.setSystemTime(new Date("2018-03-20"))
    const birthDate = new Date("1980-03-20")

    // Act - When
    const output = getAge(birthDate)

    // Assert - Then
    const expected = 38
    expect(output).toEqual(expected)
  })

  it("should return the correct age based on the birth date when the birthday has not happened yet, but will happen this month", () => {
    // Arrange - Given
    vi.setSystemTime(new Date("2018-03-20"))
    const birthDate = new Date("1980-03-25")

    // Act - When
    const output = getAge(birthDate)

    // Assert - Then
    const expected = 37
    expect(output).toEqual(expected)
  })
})
