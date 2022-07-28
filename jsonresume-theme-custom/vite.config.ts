import fs from 'node:fs'

import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import date from 'date-and-time'

const jsonResumeURL = new URL('./resume.json', import.meta.url)
const dataResumeStringJSON = await fs.promises.readFile(jsonResumeURL, {
  encoding: 'utf-8'
})
const resume = JSON.parse(dataResumeStringJSON)

// https://vitejs.dev/config/
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
