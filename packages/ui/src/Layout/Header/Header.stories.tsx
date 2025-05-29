import type { Meta, StoryObj } from "@storybook/nextjs"

import { Header as HeaderComponent } from "./Header.tsx"

const meta = {
  title: "Layout/Header",
  component: HeaderComponent,
} satisfies Meta<typeof HeaderComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Header: Story = {
  args: {},
}
