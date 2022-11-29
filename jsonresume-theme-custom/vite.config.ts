import fs from 'node:fs'

import { defineConfig } from 'vite'
import { parse as JSONCParser } from 'jsonc-parser'
import { createHtmlPlugin } from 'vite-plugin-html'
import date from 'date-and-time'

const jsonResumeURL = new URL('../resume.jsonc', import.meta.url)
const dataResumeStringJSON = await fs.promises.readFile(jsonResumeURL, {
  encoding: 'utf-8'
})
const resume = JSONCParser(dataResumeStringJSON)

/**
 * Documentation: <https://vitejs.dev/config/>
 */
export default defineConfig({
  build: {
    assetsDir: './'
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          date,
          locals: {
            ...resume
          }
        }
      }
    })
  ],
  css: {
    postcss: {}
  }
})
