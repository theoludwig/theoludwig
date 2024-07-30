import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    browser: {
      provider: "playwright",
      enabled: true,
      name: "chromium",
    },
    coverage: {
      enabled: true,
      provider: "istanbul",
    },
  },
})
