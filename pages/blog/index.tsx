import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import date from 'date-and-time'

import { Head } from 'components/Head'
import { Header } from 'components/Header'
import { Footer, FooterProps } from 'components/Footer'
import { ShadowContainer } from 'components/design/ShadowContainer'
import type { PostMetadata } from 'utils/blog'

const blogDescription =
  'The latest news about my journey of learning computer science.'

interface BlogPageProps extends FooterProps {
  posts: PostMetadata[]
}

const BlogPage: NextPage<BlogPageProps> = (props) => {
  const { version, posts } = props

  return (
    <>
      <Head title='Blog | Divlo' description={blogDescription} />

      <Header />
      <main className='flex flex-1 flex-col flex-wrap items-center'>
        <div className='mt-10 flex flex-col items-center'>
          <h1 className='text-4xl font-semibold'>Blog</h1>
          <p className='mt-6' data-cy='blog-post-date'>
            {blogDescription}
          </p>
        </div>
        <div className='flex w-full items-center justify-center p-8'>
          <div className='w-[1600px]' data-cy='blog-posts'>
            {posts.map((post, index) => {
              const postPublishedOn = date.format(
                new Date(post.frontmatter.publishedOn),
                'DD/MM/YYYY'
              )
              return (
                <Link href={`/blog/${post.slug}`} key={index}>
                  <a data-cy='blog-post'>
                    <ShadowContainer className='cursor-pointer p-6 transition duration-200 ease-in-out hover:-translate-y-2'>
                      <h2
                        data-cy='blog-post-title'
                        className='text-xl font-semibold'
                      >
                        {post.frontmatter.title}
                      </h2>
                      <p data-cy='blog-post-date' className='mt-2'>
                        {postPublishedOn}
                      </p>
                      <p data-cy='blog-post-description' className='mt-3'>
                        {post.frontmatter.description}
                      </p>
                    </ShadowContainer>
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <Footer version={version} />
    </>
  )
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const { readPackage } = await import('read-pkg')
  const { getPosts } = await import('utils/blog')
  const posts = await getPosts()
  const { version } = await readPackage()
  return { props: { version, posts } }
}

export default BlogPage
