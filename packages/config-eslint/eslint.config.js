import typescriptESLint from "typescript-eslint"
import configConventions from "eslint-config-conventions"
import importX from "eslint-plugin-import-x"
import unicorn from "eslint-plugin-unicorn"

export default typescriptESLint.config(
  {
    ignores: [
      ".next",
      "**/next.config.js",
      "**/eslint.config.js",
      "**/tailwind.config.js",
      "**/postcss.config.js",
      "**/vitest.config.ts",
      "**/kysely.config.ts",
    ],
  },
  ...configConventions,
  {
    name: "config-eslint",
    plugins: {
      "import-x": importX,
      unicorn,
    },
    rules: {
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
      "unicorn/explicit-length-check": "error",
      "unicorn/consistent-destructuring": "off",
    },
  },
)
