import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import 'katex/dist/katex.min.css'

import { getBlogPostBySlug } from '@/blog/blog'
import { BlogPost } from '@/blog/BlogPost'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export const generateMetadata = async (
  props: BlogPostPageProps
): Promise<Metadata> => {
  const blogPost = await getBlogPostBySlug(props.params.slug)
  if (blogPost == null) {
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

  return <BlogPost slug={params.slug} />
}

export default BlogPostPage
