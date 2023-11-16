import type { Meta, StoryObj } from "@storybook/react";

import ProfilePage from "@/pages/profile";

const meta = {
  title: "features/Profile/components/ProfilePage",
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileStory: Story = {};
