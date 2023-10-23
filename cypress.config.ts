import { defineConfig } from "cypress"

export default defineConfig({
  fixturesFolder: false,
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: "http://127.0.0.1:3000",
    supportFile: false,
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
})
