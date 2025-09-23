import { Link } from "@repo/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { BirthDate } from "../Home/About/AboutList/BirthDate.tsx"
import { Locales } from "../Layout/Header/Locales/Locales.tsx"

export interface CurriculumVitaeProfileProps {}

export const CurriculumVitaeProfile: React.FC<
  CurriculumVitaeProfileProps
> = () => {
  const t = useTranslations()

  return (
    <div className="card p-2">
      <div className="mx-2 flex print:hidden">
        <Locales />
      </div>
      <div className="profile-pic-container">
        <div className="profile-pic">
          <Image
            className="mx-auto block"
            alt={t("meta.title")}
            src="/images/logo.webp"
            width={450}
            height={450}
          />
        </div>
        <div className="name-and-profession text-center">
          <h1 className="h3 my-1!">
            <strong>{t("meta.title")}</strong>
          </h1>
          <h2 className="text-muted h5 font-semibold">
            {t("curriculum-vitae.description")}
          </h2>
          <h2 className="text-muted h5">
            <BirthDate />
          </h2>
          <h2 className="text-muted h5">{t("home.about.nationality.value")}</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative px-3">
          <strong className="info font-bold">
            <a href="mailto:contact@theoludwig.fr">contact@theoludwig.fr</a>
          </strong>
        </div>
        <div className="detail">
          <strong className="info font-bold">
            <Link href="/">https://theoludwig.fr</Link>
          </strong>
        </div>
      </div>
      <hr />
    </div>
  )
}
