import type { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import date from 'date-and-time'
import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

import { Head } from 'components/Head'
import { Header } from 'components/Header'
import type { FooterProps } from 'components/Footer'
import { Footer } from 'components/Footer'
import type { Post } from 'utils/blog'

interface BlogPostPageProps extends FooterProps {
  post: Post
}

const BlogPostPage: NextPage<BlogPostPageProps> = (props) => {
  const { version, post } = props

  const { theme = 'dark' } = useTheme()

  return (
    <>
      <Head
        title={`${post.frontmatter.title} | Divlo`}
        description={post.frontmatter.description}
      />

      <Header />
      <main className='flex flex-1 flex-col flex-wrap items-center'>
        <div className='my-10 flex flex-col items-center'>
          <h1 className='text-3xl font-semibold'>{post.frontmatter.title}</h1>
          <p className='mt-2' data-cy='blog-post-date'>
            {date.format(new Date(post.frontmatter.publishedOn), 'DD/MM/YYYY')}
          </p>
        </div>
        <div className='prose mb-10 px-8'>
          <MDXRemote
            {...post.source}
            components={{
              img: (properties) => {
                const { src, alt, ...props } = properties
                let source = src
                source = src?.replace('../public/', '/')
                return <img src={source} alt={alt} {...props} />
              },
              a: (props) => {
                if (props.href?.startsWith('#') ?? false) {
                  return <a {...props} />
                }
                return (
                  <a target='_blank' rel='noopener noreferrer' {...props} />
                )
              }
            }}
          />
          <Giscus
            id='comments'
            repo='Divlo/Divlo'
            repoId='MDEwOlJlcG9zaXRvcnkzNTg5NDg1NDQ='
            category='General'
            categoryId='DIC_kwDOFWUewM4CQ_WK'
            mapping='pathname'
            reactionsEnabled='1'
            emitMetadata='0'
            inputPosition='top'
            theme={theme}
            lang='en'
            loading='lazy'
          />
        </div>
      </main>
      <Footer version={version} />
    </>
  )
}

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async (
  context
) => {
  const slug = context?.params?.slug
  const { getPostBySlug } = await import('utils/blog')
  const post = await getPostBySlug(slug)
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
  return { props: { version, post } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { getPosts } = await import('utils/blog')
  const posts = await getPosts()
  return {
    paths: posts.map((post) => {
      return { params: { slug: post.slug } }
    }),
    fallback: false
  }
}

export default BlogPostPage
