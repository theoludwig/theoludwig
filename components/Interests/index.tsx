import { getI18n } from "@/i18n/i18n.server"

import type { InterestParagraphProps } from "./InterestParagraph"
import { InterestParagraph } from "./InterestParagraph"
import { InterestsList } from "./InterestsList"

export const Interests = (): JSX.Element => {
  const i18n = getI18n()

  let paragraphs = i18n.translate<InterestParagraphProps[]>(
    "home.interests.paragraphs",
  )
  if (!Array.isArray(paragraphs)) {
    paragraphs = []
  }

  return (
    <div className="max-w-full">
      {paragraphs.map((paragraph) => {
        return <InterestParagraph key={paragraph.id} {...paragraph} />
      })}
      <InterestsList />
    </div>
  )
}
