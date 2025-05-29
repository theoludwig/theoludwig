import type { Meta, StoryObj } from "@storybook/nextjs"

import { Spinner } from "./Spinner.tsx"

const meta = {
  title: "Design System/Spinner",
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

export const Component: Story = {
  args: {},
}
