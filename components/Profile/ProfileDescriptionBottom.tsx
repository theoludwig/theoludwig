import Translation from 'next-translate/Trans'

export const ProfileDescriptionBottom: React.FC = () => {
  return (
    <>
      <p className='profile-description-bottom'>
        <Translation
          i18nKey='home:about.descriptionBottom'
          components={[<br key='break' />]}
        />
      </p>

      <style jsx>
        {`
          .profile-description-bottom {
            font-size: 16px;
            display: block;
            font-weight: 400;
            line-height: 25px;
            color: #b2bac2;
            margin-top: 30px;
            margin-bottom: 0;
          }
        `}
      </style>
    </>
  )
}
