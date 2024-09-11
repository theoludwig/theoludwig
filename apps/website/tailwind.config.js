import sharedConfig from "@repo/config-tailwind"

/** @type {Pick<import('tailwindcss').Config, "presets" | "content">} */
const config = {
  content: ["./app/**/*.tsx", "../../packages/*/src/**/*.tsx"],
  presets: [sharedConfig],
}

export default config
