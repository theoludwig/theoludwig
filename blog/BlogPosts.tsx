import Link from "next/link"
import date from "date-and-time"

import { ShadowContainer } from "@/components/design/ShadowContainer"
import { getBlogPosts } from "@/blog/blog"

export const BlogPosts = async (): Promise<JSX.Element> => {
  const posts = await getBlogPosts()

  return (
    <div className="flex w-full items-center justify-center p-8">
      <ul className="w-[1600px]" data-cy="blog-posts">
        {posts.map((post) => {
          const postPublishedOn = date.format(
            new Date(post.frontmatter.publishedOn),
            "DD/MM/YYYY",
          )
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} locale="en" data-cy={post.slug}>
                <ShadowContainer className="cursor-pointer p-6 transition-all duration-300 ease-in-out hover:scale-[1.02]">
                  <h2
                    data-cy="blog-post-title"
                    className="text-xl font-semibold text-primary dark:text-primary-dark"
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
            </li>
          )
        })}
      </ul>
    </div>
  )
}
