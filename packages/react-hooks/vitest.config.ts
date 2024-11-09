import { defineConfig } from "vitest/config"

export default defineConfig({
  optimizeDeps: {
    include: ["@vitest/coverage-v8/browser"],
  },
  test: {
    browser: {
      provider: "playwright",
      enabled: true,
      name: "chromium",
      screenshotFailures: false,
    },
    coverage: {
      enabled: true,
      provider: "v8",
    },
  },
})
