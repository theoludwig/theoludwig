import { getI18n } from "@/i18n/i18n.server"

import {
  InterestsIcons,
  type InterestParagraphProps,
} from "../InterestParagraph"
import { InterestItem } from "./InterestItem"

export const InterestsList = (): JSX.Element => {
  const i18n = getI18n()

  let paragraphs = i18n.translate<InterestParagraphProps[]>(
    "home.interests.paragraphs",
  )
  if (!Array.isArray(paragraphs)) {
    paragraphs = []
  }

  return (
    <div className="my-4 flex justify-center">
      <ul className="m-0 flex w-96 list-none justify-around p-0">
        {paragraphs.map(({ title, id }) => {
          const icon = InterestsIcons[id]
          return <InterestItem key={id} title={title} fontAwesomeIcon={icon} />
        })}
      </ul>
    </div>
  )
}
