import type { Meta, StoryObj } from "@storybook/react"
import { expect, fn, userEvent, within } from "@storybook/test"

import { ErrorServer as ErrorServerComponent } from "./ErrorServer.tsx"

const meta = {
  title: "Errors/ErrorServer",
  component: ErrorServerComponent,
} satisfies Meta<typeof ErrorServerComponent>

export default meta

type Story = StoryObj<typeof meta>

export const ErrorServer: Story = {
  args: { reset: fn(), error: new Error("Server error") },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByText("Try again?"))
    await expect(args.reset).toHaveBeenCalled()
  },
}
