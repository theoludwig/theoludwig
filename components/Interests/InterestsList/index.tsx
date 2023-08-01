import { faCode, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'

import { InterestItem } from './InterestItem'

export const InterestsList = (): JSX.Element => {
  return (
    <div className='my-4 flex justify-center'>
      <ul className='m-0 flex w-96 list-none justify-around p-0'>
        <InterestItem title='Developer Full Stack' fontAwesomeIcon={faCode} />
        <InterestItem
          title='Passionate about High-Tech'
          fontAwesomeIcon={faMicrochip}
        />
        <InterestItem title='Open-Source enthusiast' fontAwesomeIcon={faGit} />
      </ul>
    </div>
  )
}
