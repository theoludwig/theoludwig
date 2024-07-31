import type { Meta, StoryObj } from "@storybook/react"

import { Header as HeaderComponent } from "./Header"

const meta = {
  title: "Layout/Header",
  component: HeaderComponent,
} satisfies Meta<typeof HeaderComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Header: Story = {
  args: {},
}
