import fs from 'fs'

import { render } from '../index.js'

const jsonResumeURL = new URL('../../resume.json', import.meta.url)
const publicResumeURL = new URL(
  '../../public/curriculum-vitae.html',
  import.meta.url
)

const dataResumeStringJSON = await fs.promises.readFile(jsonResumeURL, {
  encoding: 'utf-8'
})
const dataResumeJSON = JSON.parse(dataResumeStringJSON)
const dataResumeIndexHTML = await render(dataResumeJSON)
await fs.promises.writeFile(publicResumeURL, dataResumeIndexHTML, {
  encoding: 'utf-8'
})
