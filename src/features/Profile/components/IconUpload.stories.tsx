import type { Meta, StoryObj } from "@storybook/react";
import { IconUpload } from "./IconUpload";

const meta = {
  title: "features/Profile/components/IconUpload",
  component: IconUpload,
} satisfies Meta<typeof IconUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconUploadStory: Story = {};
