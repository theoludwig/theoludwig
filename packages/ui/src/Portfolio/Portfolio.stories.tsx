import type { Meta, StoryObj } from "@storybook/react"

import { Portfolio as PortfolioComponent } from "./Portfolio"

const meta = {
  title: "Feature/Portfolio",
  component: PortfolioComponent,
} satisfies Meta<typeof PortfolioComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Portfolio: Story = {
  args: {},
}
