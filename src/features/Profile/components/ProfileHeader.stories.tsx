import type { Meta, StoryObj } from "@storybook/react";
import { ProfileHeader } from "./ProfileHeader";

const meta = {
  title: "features/Profile/components/ProfileHeader",
  component: ProfileHeader,
} satisfies Meta<typeof ProfileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileHeaderStory: Story = {};
