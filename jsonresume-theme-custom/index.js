import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

import ejs from 'ejs'
import date from 'date-and-time'
import { Parcel } from '@parcel/core'

export const render = async (resume) => {
  const themeIndexURL = new URL('./theme/index.ejs', import.meta.url)
  const themeBuildURL = new URL('./theme/index.html', import.meta.url)
  const indexHTMLURL = new URL('./dist/index.html', import.meta.url)
  const themeBuildPath = fileURLToPath(themeBuildURL)
  const html = await ejs.renderFile(fileURLToPath(themeIndexURL), {
    date,
    locals: {
      ...resume
    }
  })
  await fs.promises.writeFile(themeBuildURL, html, { encoding: 'utf-8' })
  const bundler = new Parcel({
    entries: themeBuildPath,
    source: themeBuildPath,
    mode: 'production',
    defaultConfig: '@parcel/config-default'
  })
  await bundler.run()
  return await fs.promises.readFile(indexHTMLURL, { encoding: 'utf-8' })
}
