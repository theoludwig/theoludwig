import { faCode, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'

import { InterestItem } from './InterestItem'

export const InterestsList: React.FC = () => {
  return (
    <div className='flex justify-center my-4'>
      <ul className='flex justify-around p-0 m-0 list-none w-96'>
        <InterestItem
          title='Developer Full Stack Junior'
          fontAwesomeIcon={faCode}
        />
        <InterestItem
          title='Passionate about High-Tech'
          fontAwesomeIcon={faMicrochip}
        />
        <InterestItem title='Open-Source enthusiast' fontAwesomeIcon={faGit} />
      </ul>
    </div>
  )
}
