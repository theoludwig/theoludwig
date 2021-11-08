import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import date from 'date-and-time'
import 'prism-themes/themes/prism-one-dark.css'

import { Head } from 'components/Head'
import { Header } from 'components/Header'
import { Footer, FooterProps } from 'components/Footer'
import type { Post } from 'utils/blog'

interface BlogPostPageProps extends FooterProps {
  post: Post
}

const BlogPostPage: React.FC<BlogPostPageProps> = (props) => {
  const { version, post } = props

  return (
    <>
      <Head
        title={`${post.frontmatter.title} | Divlo`}
        description={post.frontmatter.description}
      />

      <Header />
      <main className='flex flex-col flex-wrap flex-1 items-center'>
        <div className='flex flex-col items-center my-10'>
          <h1 className='text-3xl font-semibold'>{post.frontmatter.title}</h1>
          <p className='mt-2' data-cy='blog-post-date'>
            {date.format(new Date(post.frontmatter.publishedOn), 'DD/MM/YYYY')}
          </p>
        </div>
        <div className='prose mb-10 px-8'>
          <MDXRemote
            {...post.source}
            components={{
              a: (props: React.ComponentPropsWithoutRef<'a'>) => (
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
