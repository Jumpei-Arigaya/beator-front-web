import type { Meta, StoryObj } from "@storybook/react";
import { SocialConnection } from "./SocialConnection";

const meta = {
  title: "features/Profile/components/SocialConnection",
  component: SocialConnection,
} satisfies Meta<typeof SocialConnection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileIconStory: Story = {};
