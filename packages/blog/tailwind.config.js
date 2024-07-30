import sharedConfig from "@repo/config-tailwind"

/** @type {Pick<import('tailwindcss').Config, "presets" | "content">} */
const config = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
}

export default config
