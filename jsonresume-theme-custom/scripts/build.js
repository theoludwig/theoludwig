import { fileURLToPath } from 'node:url'
import fs from 'node:fs'

import { build } from 'vite'

const jsonResumeThemeCustom = new URL('../', import.meta.url)
const jsonResumeThemeCustomDist = new URL('./dist', jsonResumeThemeCustom)
const publicResumeOutputURL = new URL(
  '../../public/curriculum-vitae',
  import.meta.url
)

await build({
  root: fileURLToPath(jsonResumeThemeCustom),
  base: '/curriculum-vitae/'
})

await fs.promises.cp(jsonResumeThemeCustomDist, publicResumeOutputURL, {
  recursive: true
})
