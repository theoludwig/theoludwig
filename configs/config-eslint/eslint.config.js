import nextPlugin from "@next/eslint-plugin-next"
import configConventions from "eslint-config-conventions"
import importXPlugin from "eslint-plugin-import-x"
import reactPlugin from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig(
  ...configConventions,
  reactPlugin.configs.flat.recommended,
  globalIgnores(["**/kysely.config.ts"]),
  {
    name: "config-eslint",
    settings: {
      react: {
        version: "19.2.0",
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      "import-x": importXPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...reactHooks.configs.recommended.rules,
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",

      "react/jsx-no-target-blank": "off",
      "react/no-unknown-property": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "react/void-dom-elements-no-children": "error",
      "react/jsx-boolean-value": "error",
      "react/iframe-missing-sandbox": "off",

      "no-restricted-imports": [
        "error",
        {
          paths: [
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
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "always",
          tsx: "always",
          js: "never",
          jsx: "never",
        },
      ],
    },
  },
)
