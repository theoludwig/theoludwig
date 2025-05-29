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
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
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
