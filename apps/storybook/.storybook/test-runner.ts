import type { TestRunnerConfig } from "@storybook/test-runner"
import { getStoryContext } from "@storybook/test-runner"

import { checkA11y, configureAxe, injectAxe } from "axe-playwright"

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page)
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context)

    const isA11yDisabled = storyContext.parameters?.a11y?.disable as boolean
    if (isA11yDisabled) {
      return
    }

    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    })

    await checkA11y(page, "#storybook-root", {
      verbose: false,
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    })
  },
}

export default config
