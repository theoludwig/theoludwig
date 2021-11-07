import { GetServerSideProps } from 'next'
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import date from 'date-and-time'
import 'prism-themes/themes/prism-one-dark.css'

import { Head } from 'components/Head'
import { Header } from 'components/Header'
import { Footer, FooterProps } from 'components/Footer'
import { Post } from 'utils/blog'

interface BlogPostPageProps extends FooterProps, Post {}

const BlogPostPage: React.FC<BlogPostPageProps> = (props) => {
  const { version, code, frontmatter } = props

  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <Head
        title={`${frontmatter.title} | Divlo`}
        description={frontmatter.description}
      />

      <Header />
      <main className='flex flex-col flex-wrap flex-1 items-center'>
        <div className='flex flex-col items-center my-10'>
          <h1 className='text-3xl font-semibold'>{frontmatter.title}</h1>
          <p className='mt-2' data-cy='blog-post-date'>
            {date.format(new Date(frontmatter.publishedOn), 'DD/MM/YYYY')}
          </p>
        </div>
        <div className='prose mb-10 px-8'>
          <Component
            components={{
              a: (props) => (
                <a target='_blank' rel='noopener noreferrer' {...props} />
              )
            }}
          />
        </div>
      </main>
      <Footer version={version} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<BlogPostPageProps> = async (
  context
) => {
  const slug = context?.params?.slug
  const post = await Post.getBySlug(slug)
  if (post == null || (post != null && !post.frontmatter.isPublished)) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
  const { readPackage } = await import('read-pkg')
  const { version } = await readPackage()
  return { props: { version, ...post } }
}

export default BlogPostPage
