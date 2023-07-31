import { getI18n } from '@/i18n/i18n.server'

import { Repository } from './Repository'

export const OpenSource: React.FC = () => {
  const i18n = getI18n()

  return (
    <div className='mt-0 flex max-w-full flex-col items-center'>
      <p className='text-center'>
        {i18n.translate('home.open-source.description')}
      </p>
      <div className='my-6 grid grid-cols-1 gap-6 md:w-10/12 md:grid-cols-2'>
        <Repository
          name='nodejs/node'
          description='Node.js JavaScript runtime ✨🐢🚀✨'
          href='https://github.com/nodejs/node/commits?author=theoludwig'
        />
        <Repository
          name='standard/standard'
          description='🌟 JavaScript Style Guide, with linter & automatic code fixer'
          href='https://github.com/standard/standard/commits?author=theoludwig'
        />
        <Repository
          name='nrwl/nx'
          description='Smart, Fast and Extensible Build System'
          href='https://github.com/nrwl/nx/commits?author=theoludwig'
        />
        <Repository
          name='vercel/next.js'
          description='The React Framework'
          href='https://github.com/vercel/next.js/commits?author=theoludwig'
        />
      </div>
    </div>
  )
}
