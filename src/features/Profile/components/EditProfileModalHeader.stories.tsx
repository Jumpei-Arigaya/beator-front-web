import type { Meta, StoryObj } from "@storybook/react";
import { EditProfileModalHeader } from "./EditProfileModalHeader";

const meta = {
  title: "features/Profile/components/EditProfileModalHeader",
  component: EditProfileModalHeader,
} satisfies Meta<typeof EditProfileModalHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EditProfileModalHeaderStory: Story = {};
