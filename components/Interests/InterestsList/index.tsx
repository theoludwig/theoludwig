import { faCode, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'

import { InterestItem } from './InterestItem'

export const InterestsList: React.FC = () => {
  return (
    <>
      <div className='container-list'>
        <ul className='interests-list'>
          <InterestItem
            title='Developer Full Stack Junior'
            fontAwesomeIcon={faCode}
          />
          <InterestItem
            title='Passionate about High-Tech'
            fontAwesomeIcon={faMicrochip}
          />
          <InterestItem
            title='Open-Source enthusiast'
            fontAwesomeIcon={faGit}
          />
        </ul>
      </div>

      <style jsx>
        {`
          .container-list {
            display: flex;
            justify-content: center;
            margin: 15px 0 15px 0;
          }
          .interests-list {
            display: flex;
            justify-content: space-around;
            padding: 0;
            margin: 0;
            width: 60%;
            list-style: none;
          }
        `}
      </style>
    </>
  )
}
