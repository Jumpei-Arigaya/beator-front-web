import type { Meta, StoryObj } from "@storybook/react";
import DashBoard from "./DashBoard";

const meta = {
  title: "components/elements/layouts/DashBoard",
  component: DashBoard,
} satisfies Meta<typeof DashBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DashBoardStory: Story = {
  args: {
    children: <div></div>,
  },
};
