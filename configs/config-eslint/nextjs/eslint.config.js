import { FlatCompat } from "@eslint/eslintrc"
import typescriptESLint from "typescript-eslint"
import config from "../eslint.config.js"

const flatCompat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default typescriptESLint.config(
  ...config,
  ...flatCompat.extends("next/core-web-vitals"),
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
