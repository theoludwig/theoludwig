import type { Meta, StoryObj } from "@storybook/nextjs"

import { Interests as InterestsComponent } from "./Interests.tsx"

const meta = {
  title: "Home/Interests",
  component: InterestsComponent,
} satisfies Meta<typeof InterestsComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Interests: Story = {
  args: {},
}
