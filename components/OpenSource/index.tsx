import useTranslation from 'next-translate/useTranslation'

import { Repository } from './Repository'

export const OpenSource: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='max-w-full mt-0 flex flex-col items-center'>
        <p className='text-center'>{t('home:open-source.description')}</p>
        <div className='grid grid-cols-1 md:w-10/12 md:grid-cols-2 gap-6 my-6'>
          <Repository
            name='nodejs/node'
            description='Node.js JavaScript runtime ✨️🐢🚀✨️'
            href='https://github.com/nodejs/node/commits?author=Divlo'
          />
          <Repository
            name='standard/standard'
            description='🌟 JavaScript Style Guide, with linter & automatic code fixer'
            href='https://github.com/standard/standard/commits?author=Divlo'
          />
          <Repository
            name='nrwl/nx'
            description='Smart, Extensible Build Framework'
            href='https://github.com/nrwl/nx/commits?author=Divlo'
          />
          <Repository
            name='vercel/styled-jsx'
            description='Full CSS support for JSX without compromises'
            href='https://github.com/vercel/styled-jsx/commits?author=Divlo'
          />
        </div>
      </div>

      <style jsx global>{`
        .animation-custom {
          position: relative;
          transition: all 0.3s ease 0s;
        }
        .animation-custom:hover {
          transform: translateY(-7px);
        }
      `}</style>
    </>
  )
}
