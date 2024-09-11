import { afterEach, describe, expect, it, vi } from "vitest"

describe("VERSION", () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
    vi.restoreAllMocks()
  })

  it('should return "0.0.0-development" when NODE_ENV is development', async () => {
    // Arrange - Given
    vi.stubEnv("NODE_ENV", "development")

    // Act - When
    const { VERSION } = await import("../constants.ts")

    // Assert - Then
    const expected = "0.0.0-development"
    expect(VERSION).toEqual(expected)
  })

  it("should return the version from package.json when NODE_ENV is not development", async () => {
    // Arrange - Given
    vi.stubEnv("NODE_ENV", "production")
    vi.mock("../../package.json", () => {
      return { default: { version: "1.0.0" } }
    })

    // Act - When
    const { VERSION } = await import("../constants.ts")

    // Assert - Then
    const expected = "1.0.0"
    expect(VERSION).toEqual(expected)
  })
})
