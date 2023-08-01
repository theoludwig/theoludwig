import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import date from 'date-and-time'
import { nodeTypes } from '@mdx-js/mdx'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { getHighlighter } from 'shiki'

import 'katex/dist/katex.min.css'

import { remarkSyntaxHighlightingPlugin } from '@/blog/remarkSyntaxHighlightingPlugin'
import { getBlogPostBySlug } from '@/blog/blog'
import { BlogPostComments } from '@/blog/BlogPostComments'
import { getTheme } from '@/theme/theme.server'

const Heading = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
): JSX.Element => {
  const { children, id = '' } = props
  return (
    <h2 {...props} className='group'>
      <Link
        href={`#${id}`}
        className='invisible !text-black group-hover:visible dark:!text-white'
      >
        <FontAwesomeIcon className='mr-2 inline h-4 w-4' icon={faLink} />
      </Link>
      {children}
    </h2>
  )
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export const generateMetadata = async (
  props: BlogPostPageProps
): Promise<Metadata> => {
  const blogPost = await getBlogPostBySlug(props.params.slug)
  if (blogPost == null || !blogPost.frontmatter.isPublished) {
    return notFound()
  }
  const title = `${blogPost.frontmatter.title} | Théo LUDWIG`
  const description = blogPost.frontmatter.description
  return {
    title,
    description,
    openGraph: {
      title,
      description
    },
    twitter: {
      title,
      description
    }
  }
}

const BlogPostPage = async (props: BlogPostPageProps): Promise<JSX.Element> => {
  const { params } = props

  const blogPost = await getBlogPostBySlug(params.slug)
  if (blogPost == null || !blogPost.frontmatter.isPublished) {
    return notFound()
  }

  const cookiesStore = cookies()
  const theme = getTheme()

  const highlighter = await getHighlighter({
    theme: `${theme}-plus`
  })

  return (
    <main className='break-wrap-words flex flex-1 flex-col flex-wrap items-center'>
      <div className='my-10 flex flex-col items-center text-center'>
        <h1 className='text-3xl font-semibold'>{blogPost.frontmatter.title}</h1>
        <p className='mt-2' data-cy='blog-post-date'>
          {date.format(
            new Date(blogPost.frontmatter.publishedOn),
            'DD/MM/YYYY'
          )}
        </p>
      </div>
      <div className='prose mb-10'>
        <div className='px-8'>
          <MDXRemote
            source={blogPost.content}
            options={{
              mdxOptions: {
                remarkPlugins: [
                  remarkGfm,
                  [remarkSyntaxHighlightingPlugin, { highlighter }],
                  remarkMath
                ],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeRaw, { passThrough: nodeTypes }],
                  rehypeKatex
                ]
              }
            }}
            components={{
              h1: Heading,
              h2: Heading,
              h3: Heading,
              h4: Heading,
              h5: Heading,
              h6: Heading,
              img: (properties) => {
                const { src = '', alt = 'Blog Image' } = properties
                const source = src.replace('../../public/', '/')
                return (
                  <span className='flex flex-col items-center justify-center'>
                    <Image
                      src={source}
                      alt={alt}
                      width={1000}
                      height={1000}
                      className='h-auto w-auto'
                    />
                  </span>
                )
              },
              a: (props) => {
                const { href = '' } = props
                if (href.startsWith('#')) {
                  return <a {...props} />
                }
                return (
                  <a target='_blank' rel='noopener noreferrer' {...props} />
                )
              }
            }}
          />
          <BlogPostComments cookiesStore={cookiesStore.toString()} />
        </div>
      </div>
    </main>
  )
}

export default BlogPostPage
