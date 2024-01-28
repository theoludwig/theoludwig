import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"

interface InterestItemProps {
  title: string
  fontAwesomeIcon: IconDefinition
}

export const InterestItem = (props: InterestItemProps): JSX.Element => {
  const { fontAwesomeIcon, title } = props

  return (
    <li className="m-2 size-8" title={title}>
      <FontAwesomeIcon
        className="block size-full text-yellow dark:text-yellow-dark"
        icon={fontAwesomeIcon}
      />
    </li>
  )
}
