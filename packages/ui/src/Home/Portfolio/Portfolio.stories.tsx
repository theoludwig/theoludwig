import type { Meta, StoryObj } from "@storybook/react"

import { Portfolio as PortfolioComponent } from "./Portfolio.tsx"

const meta = {
  title: "Home/Portfolio",
  component: PortfolioComponent,
} satisfies Meta<typeof PortfolioComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Portfolio: Story = {
  args: {},
}
