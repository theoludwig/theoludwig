import type { Meta, StoryObj } from "@storybook/react"

import { Interests as InterestsComponent } from "./Interests"

const meta = {
  title: "Feature/Interests",
  component: InterestsComponent,
} satisfies Meta<typeof InterestsComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Interests: Story = {
  args: {},
}
