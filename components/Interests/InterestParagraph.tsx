import htmlParser from "html-react-parser"
import { faCode, faMicrochip } from "@fortawesome/free-solid-svg-icons"
import { faGit } from "@fortawesome/free-brands-svg-icons"

export const InterestsIcons = {
  code: faCode,
  "open-source": faGit,
  "high-tech": faMicrochip,
} as const

export interface InterestParagraphProps {
  title: string
  description: string
  id: keyof typeof InterestsIcons
}

export const InterestParagraph = (
  props: InterestParagraphProps,
): JSX.Element => {
  const { title, description } = props

  return (
    <div className="my-6 text-center text-gray dark:text-gray-dark">
      <h3 className="text-lg font-semibold text-primary dark:text-primary-dark">
        {title}
      </h3>
      <p className="my-2">{htmlParser(description)}</p>
    </div>
  )
}
