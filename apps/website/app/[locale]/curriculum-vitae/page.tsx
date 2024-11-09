import type { LocaleProps } from "@repo/i18n/routing"
import { CurriculumVitae } from "@repo/ui/CurriculumVitae"
import { setRequestLocale } from "next-intl/server"

interface CurriculumVitaeProps extends LocaleProps {}

const CurriculumVitaePage: React.FC<CurriculumVitaeProps> = async (props) => {
  const { params } = props

  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale)

  return <CurriculumVitae />
}

export default CurriculumVitaePage
