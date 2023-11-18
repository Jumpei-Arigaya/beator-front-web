import type { Meta, StoryObj } from "@storybook/react";
import { EditProfileModal } from "./EditProfileModal";

const meta = {
  title: "features/Profile/components/EditProfileModal",
  component: EditProfileModal,
} satisfies Meta<typeof EditProfileModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EditProfileModalStory: Story = {};
