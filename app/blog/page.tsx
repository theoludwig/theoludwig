import { Suspense } from "react"
import type { Metadata } from "next"

import { BlogPosts } from "@/blog/BlogPosts"
import { Loader } from "@/components/design/Loader"

const title = "Blog | Théo LUDWIG"
const description =
  "The latest news about my journey of learning computer science."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
}

const BlogPage = async (): Promise<JSX.Element> => {
  return (
    <main className="flex flex-1 flex-col flex-wrap items-center">
      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-primary dark:text-primary-dark">
          Blog
        </h1>
        <p className="mt-6 text-center" data-cy="blog-post-date">
          {description}
        </p>
      </div>
      <Suspense fallback={<Loader className="mt-8" />}>
        <BlogPosts />
      </Suspense>
    </main>
  )
}

export default BlogPage
