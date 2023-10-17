import type { Meta, StoryObj } from "@storybook/react";
import { ProfileIcon } from "./ProfileIcon";

const meta = {
  title: "features/Profile/components/ProfileIcon",
  component: ProfileIcon,
} satisfies Meta<typeof ProfileIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlayBackBarStory: Story = {};
