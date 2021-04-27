import useTranslation from 'next-translate/useTranslation'

export const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <footer className='Footer text-center'>
        <p>
          <span className='important'>Divlo</span> |{' '}
          {t('common:allRightsReserved')}
        </p>
      </footer>

      <style jsx>
        {`
          .Footer {
            border-top: var(--border-header-footer);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px;
          }
        `}
      </style>
    </>
  )
}
