import sharedConfig from "@repo/config-tailwind"

/** @type {Pick<import('tailwindcss').Config, "presets" | "content">} */
const config = {
  content: [
    ".storybook/preview.tsx",
    "../../packages/ui/src/**/*.tsx",
    "../../packages/blog/src/**/*.tsx",
  ],
  presets: [sharedConfig],
}

export default config
