import type { Meta, StoryObj } from "@storybook/nextjs"

import type { TypographyProps } from "./Typography.tsx"
import { Typography } from "./Typography.tsx"

const meta = {
  title: "Design System/Typography",
  component: Typography,
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

export const Component: Story = {
  args: {
    children: "Typography",
  },
}

export const Variants: Story = {
  render: () => {
    return (
      <section className="my-6 space-y-4">
        {Array.from({ length: 6 }).map((_, index) => {
          const heading = `h${index + 1}`
          return (
            <Typography
              as={heading as TypographyProps["as"]}
              variant={heading as TypographyProps["variant"]}
              key={heading}
            >
              Heading {heading}
            </Typography>
          )
        })}

        <Typography as="p" variant="text1">
          Text 1
        </Typography>
        <Typography as="p" variant="text2">
          Text 2
        </Typography>

        <Typography as="p" variant="text1">
          <strong>Bold (Strong)</strong>
        </Typography>

        <Typography as="p" variant="text1">
          <em>Italic (Emphasis)</em>
        </Typography>

        <Typography as="p" variant="text1">
          <u>Underline</u>
        </Typography>

        <Typography as="p" variant="text1">
          <del>Strikethrough</del>
        </Typography>

        <Typography as="p" variant="text1">
          <mark>Highlighted</mark>
        </Typography>

        <Typography as="p" variant="text1">
          <kbd>Ctrl + C</kbd> (Keyboard Input)
        </Typography>

        <Typography as="p" variant="text1">
          <abbr title="Cascading Style Sheets">CSS</abbr> (Abbreviation or Acronym)
        </Typography>

        <Typography as="p" variant="text1">
          <q>Citation</q>
        </Typography>

        <Typography as="p" variant="text1">
          A <dfn id="def-validator">validator</dfn> is a program that checks for syntax errors in
          code or documents. (Definition)
        </Typography>

        <Typography as="blockquote" variant="text1">
          A long Citation...
          <br />
          Second line...
        </Typography>

        <ul>
          <li>Ordered list item 1</li>
          <li>Ordered list item 2</li>
        </ul>

        <ol>
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
        </ol>
      </section>
    )
  },
}
