import Link from "next/link"
import date from "date-and-time"

import { ShadowContainer } from "@/components/design/ShadowContainer"
import { getBlogPosts } from "@/blog/blog"

export const BlogPosts = async (): Promise<JSX.Element> => {
  const posts = await getBlogPosts()

  return (
    <div className="flex w-full items-center justify-center p-8">
      <div className="w-[1600px]" data-cy="blog-posts">
        {posts.map((post, index) => {
          const postPublishedOn = date.format(
            new Date(post.frontmatter.publishedOn),
            "DD/MM/YYYY",
          )
          return (
            <Link
              href={`/blog/${post.slug}`}
              key={index}
              locale="en"
              data-cy={post.slug}
            >
              <ShadowContainer className="cursor-pointer p-6 transition duration-200 ease-in-out hover:-translate-y-2">
                <h2
                  data-cy="blog-post-title"
                  className="text-xl font-semibold text-yellow dark:text-yellow-dark"
                >
                  {post.frontmatter.title}
                </h2>
                <p data-cy="blog-post-date" className="mt-2">
                  {postPublishedOn}
                </p>
                <p data-cy="blog-post-description" className="mt-3">
                  {post.frontmatter.description}
                </p>
              </ShadowContainer>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
