import { getBlogPosts } from "@repo/blog"
import { BlogPosts } from "@repo/blog/BlogPosts"
import type { LocaleProps } from "@repo/i18n/config"
import { MainLayout } from "@repo/ui/Layout/MainLayout"
import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@repo/ui/Layout/Section"
import { LOCALE_DEFAULT } from "@repo/utils/constants"
import type { Metadata } from "next"
import { unstable_setRequestLocale } from "next-intl/server"

const title = "Blog | Théo LUDWIG"
const description =
  "The latest news about my journey of learning computer science."

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: LOCALE_DEFAULT,
    },
    twitter: {
      title,
      description,
    },
  }
}

interface BlogPageProps extends LocaleProps {}

const BlogPage: React.FC<BlogPageProps> = async (props) => {
  const { params } = props

  // Enable static rendering
  unstable_setRequestLocale(params.locale)

  const posts = await getBlogPosts()

  return (
    <MainLayout>
      <Section verticalSpacing horizontalSpacing>
        <SectionTitle>Blog</SectionTitle>
        <SectionDescription>{description}</SectionDescription>

        <BlogPosts posts={posts} />
      </Section>
    </MainLayout>
  )
}

export default BlogPage
