import typescriptESLint from "typescript-eslint"
import configNextjs from "@repo/eslint-config/nextjs"

export default typescriptESLint.config(...configNextjs, {
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parser: typescriptESLint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
