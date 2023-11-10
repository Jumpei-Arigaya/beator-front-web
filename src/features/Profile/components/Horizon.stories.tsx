import type { Meta, StoryObj } from "@storybook/react";
import { Horizon } from "./Horizon";

const meta = {
  title: "features/Profile/components/Horizon",
  component: Horizon,
} satisfies Meta<typeof Horizon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileIconStory: Story = {};
