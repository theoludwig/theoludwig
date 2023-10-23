import { fileURLToPath } from "node:url"
import fs from "node:fs"

import { build } from "vite"

const curriculumVitae = new URL("./", import.meta.url)
const curriculumVitaeDist = new URL("./dist", curriculumVitae)
const publicCurriculumVitaeOutputURL = new URL(
  "../public/curriculum-vitae",
  import.meta.url,
)

await build({
  root: fileURLToPath(curriculumVitae),
  base: "/curriculum-vitae/",
})

await fs.promises.cp(curriculumVitaeDist, publicCurriculumVitaeOutputURL, {
  recursive: true,
})
