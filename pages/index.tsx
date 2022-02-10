import { GetStaticProps, NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

import { RevealFade } from 'components/design/RevealFade'
import { Section } from 'components/design/Section'
import { Head } from 'components/Head'
import { Interests } from 'components/Interests'
import { Portfolio } from 'components/Portfolio'
import { Profile } from 'components/Profile'
import { SocialMediaList } from 'components/Profile/SocialMediaList'
import { Skills } from 'components/Skills'
import { OpenSource } from 'components/OpenSource'
import { Header } from 'components/Header'
import { Footer, FooterProps } from 'components/Footer'
import { getAge } from 'utils/getAge'

interface HomeProps extends FooterProps {
  description: string
}

const Home: NextPage<HomeProps> = (props) => {
  const { t } = useTranslation()
  const { version, description } = props

  return (
    <>
      <Head description={description} />

      <Header showLanguage />
      <main className='flex flex-col md:mx-auto md:max-w-4xl lg:max-w-7xl'>
        <Section isMain id='about'>
          <Profile />
          <SocialMediaList />
        </Section>

        <RevealFade>
          <Section id='interests' heading={t('home:interests.title')}>
            <Interests />
          </Section>
        </RevealFade>

        <RevealFade>
          <Section
            id='skills'
            heading={t('home:skills.title')}
            withoutShadowContainer
          >
            <Skills />
          </Section>
        </RevealFade>

        <RevealFade>
          <Section
            id='portfolio'
            heading={t('home:portfolio.title')}
            withoutShadowContainer
          >
            <Portfolio />
          </Section>
        </RevealFade>

        <RevealFade>
          <Section
            id='open-source'
            heading='Open source'
            withoutShadowContainer
          >
            <OpenSource />
          </Section>
        </RevealFade>
      </main>
      <Footer version={version} />
    </>
  )
}

export const getStaticProps: GetStaticProps<FooterProps> = async () => {
  const { readPackage } = await import('read-pkg')
  const { version } = await readPackage()
  const birthDate = new Date('2003-03-31')
  const age = getAge(birthDate)
  const description = `I'm Divlo, I'm ${age} years old, I'm from France - Developer Full Stack Junior • Passionate about High-Tech`
  return { props: { version, description } }
}

export default Home
