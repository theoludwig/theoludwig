import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'components/design/Tooltip'

interface InterestItemProps {
  title: string
  fontAwesomeIcon: IconDefinition
}

export const InterestItem: React.FC<InterestItemProps> = (props) => {
  const { fontAwesomeIcon, title } = props

  return (
    <>
      <li className='interest-item'>
        <Tooltip title={title}>
          <FontAwesomeIcon
            className='color-primary'
            style={{
              cursor: 'pointer',
              height: '100%',
              width: '100%',
              display: 'block'
            }}
            icon={fontAwesomeIcon}
          />
        </Tooltip>
      </li>

      <style jsx>
        {`
          .interest-item {
            margin: 7px 5px;
            width: 34px;
            height: 34px;
          }
        `}
      </style>
    </>
  )
}
