import { useTranslations } from "next-intl"
import { Section, SectionTitle } from "../design/Section/Section"
import { PortfolioItem, type PortfolioProject } from "./PortfolioItem"

export interface PortfolioProps {}

export const Portfolio: React.FC<PortfolioProps> = () => {
  const t = useTranslations()

  const items: PortfolioProject[] = [
    {
      id: "carolo",
      title: t("home.portfolio.carolo.title"),
      description: t("home.portfolio.carolo.description"),
      link: "https://carolo.theoludwig.fr/",
      image: "/images/portfolio/Carolo.webp",
    },
    {
      id: "leon",
      title: t("home.portfolio.leon.title"),
      description: t("home.portfolio.leon.description"),
      link: "https://getleon.ai/",
      image: "/images/portfolio/Leon.webp",
    },
  ]

  return (
    <Section verticalSpacing horizontalSpacing id="portfolio">
      <SectionTitle>{t("home.portfolio.title")}</SectionTitle>

      <ul className="flex w-full list-none flex-wrap justify-center gap-12 px-3">
        {items.map((item) => {
          return <PortfolioItem key={item.id} portfolioProject={item} />
        })}
      </ul>
    </Section>
  )
}
