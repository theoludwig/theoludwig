import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  docs: {
    defaultName: "Documentation",
  },
  stories: [
    "../../../packages/ui/src/**/*.stories.tsx",
    "../../../packages/blog/src/**/*.stories.tsx",
    "../stories/*.mdx",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
  },
  staticDirs: ["../../website/public"],
}

export default config
