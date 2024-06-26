import { getI18n } from "@/i18n/i18n.server"

import type { PortfolioItemProps } from "./PortfolioItem"
import { PortfolioItem } from "./PortfolioItem"

export const Portfolio = (): JSX.Element => {
  const i18n = getI18n()

  let items = i18n.translate<PortfolioItemProps[]>("home.portfolio.items")
  if (!Array.isArray(items)) {
    items = []
  }

  return (
    <ul className="flex w-full flex-wrap justify-center px-3">
      {items.map((item) => {
        return <PortfolioItem key={item.title} {...item} />
      })}
    </ul>
  )
}
