import fs from "node:fs"

import { defineConfig } from "vite"
import { parse as JSONCParser } from "jsonc-parser"
import { createHtmlPlugin } from "vite-plugin-html"
import date from "date-and-time"

const jsonCurriculumVitaeURL = new URL(
  "./curriculum-vitae.jsonc",
  import.meta.url,
)
const dataCurriculumVitaeStringJSON = await fs.promises.readFile(
  jsonCurriculumVitaeURL,
  {
    encoding: "utf-8",
  },
)
const curriculumVitae = JSONCParser(dataCurriculumVitaeStringJSON)

/**
 * Documentation: <https://vitejs.dev/config/>
 */
export default defineConfig({
  build: {
    assetsDir: "./",
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          date,
          locals: {
            ...curriculumVitae,
          },
        },
      },
    }),
  ],
  css: {
    postcss: {},
  },
})
