const path = require('path')
const fs = require('fs')

const ejs = require('ejs')
const date = require('date-and-time')
const { Parcel } = require('@parcel/core')

const render = async (resume) => {
  const themeIndexPath = path.join(__dirname, 'theme', 'index.ejs')
  const themeBuildPath = path.join(__dirname, 'theme', 'index.html')
  const indexHTMLPath = path.join(__dirname, 'dist', 'index.html')
  const html = await ejs.renderFile(themeIndexPath, {
    date,
    locals: {
      ...resume
    }
  })

  await fs.promises.writeFile(themeBuildPath, html, { encoding: 'utf-8' })
  const bundler = new Parcel({
    entries: themeBuildPath,
    source: themeBuildPath,
    mode: 'production',
    defaultConfig: '@parcel/config-default'
  })
  await bundler.run()
  return await fs.promises.readFile(indexHTMLPath, { encoding: 'utf-8' })
}

module.exports = {
  render
}
