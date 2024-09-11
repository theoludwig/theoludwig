import { Link } from "@repo/i18n/navigation"
import { Typography } from "@repo/ui/Design/Typography"
import { Section, SectionContent } from "@repo/ui/Layout/Section"
import { getISODate } from "@repo/utils/dates"
import type { BlogPost } from "./BlogPost.tsx"

export interface BlogPostsProps {
  posts: BlogPost[]
}

export const BlogPosts: React.FC<BlogPostsProps> = (props) => {
  const { posts } = props

  return (
    <ul className="list-none">
      {posts.map((post) => {
        const postPublishedOn = getISODate(
          new Date(post.frontmatter.publishedOn),
        )

        return (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <Section verticalSpacing>
                <SectionContent
                  className="cursor-pointer p-6 transition-all duration-300 ease-in-out hover:scale-[1.02] sm:p-6"
                  shadowContainer
                >
                  <Typography variant="h4" as="h3">
                    {post.frontmatter.title}
                  </Typography>
                  <p className="mt-2">{postPublishedOn}</p>
                  <p className="mt-3">{post.frontmatter.description}</p>
                </SectionContent>
              </Section>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
