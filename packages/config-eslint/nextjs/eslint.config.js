import { FlatCompat } from "@eslint/eslintrc"
import storybook from "eslint-plugin-storybook"
import tailwind from "eslint-plugin-tailwindcss"
import typescriptESLint from "typescript-eslint"
import config from "../eslint.config.js"

const flatCompat = new FlatCompat()

export default typescriptESLint.config(
  ...config,
  ...flatCompat.extends("next/core-web-vitals"),
  ...tailwind.configs["flat/recommended"],
  ...storybook.configs["flat/recommended"],
  {
    name: "config-eslint/nextjs",
    settings: {
      tailwindcss: {
        callees: ["classNames", "cva"],
      },
      react: {
        version: "detect",
      },
    },
    rules: {
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "react/void-dom-elements-no-children": "error",
      "react/jsx-boolean-value": "error",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "next/link",
              message: "Please import from `@repo/i18n/routing` instead.",
            },
            {
              name: "next/navigation",
              importNames: [
                "redirect",
                "permanentRedirect",
                "useRouter",
                "usePathname",
              ],
              message: "Please import from `@repo/i18n/routing` instead.",
            },
          ],
        },
      ],
    },
  },
)
