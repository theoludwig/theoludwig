import useTranslation from 'next-translate/useTranslation'

import { Repository } from './Repository'

export const OpenSource: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className='mt-0 flex max-w-full flex-col items-center'>
      <p className='text-center'>{t('home:open-source.description')}</p>
      <div className='my-6 grid grid-cols-1 gap-6 md:w-10/12 md:grid-cols-2'>
        <Repository
          name='nodejs/node'
          description='Node.js JavaScript runtime 🐢🚀'
          href='https://github.com/nodejs/node/commits?author=theoludwig'
        />
        <Repository
          name='standard/standard'
          description='🌟 JavaScript Style Guide, with linter & automatic code fixer'
          href='https://github.com/standard/standard/commits?author=theoludwig'
        />
        <Repository
          name='nrwl/nx'
          description='Smart, Extensible Build Framework'
          href='https://github.com/nrwl/nx/commits?author=theoludwig'
        />
        <Repository
          name='vercel/next.js'
          description='The React Framework for Production'
          href='https://github.com/vercel/next.js/commits?author=theoludwig'
        />
      </div>
    </div>
  )
}
