import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface InterestItemProps {
  title: string
  fontAwesomeIcon: IconDefinition
}

export const InterestItem: React.FC<InterestItemProps> = (props) => {
  const { fontAwesomeIcon, title } = props

  return (
    <li className='interest-item my-2 mx-2 w-8 h-8' title={title}>
      <FontAwesomeIcon
        className='text-yellow cursor-pointer h-full w-full block'
        icon={fontAwesomeIcon}
      />
    </li>
  )
}
