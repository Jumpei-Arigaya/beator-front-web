import type { Meta, StoryObj } from "@storybook/react";
import { UploadIcon } from "./UploadIcon";

const meta = {
  title: "features/Profile/components/UploadIcon",
  component: UploadIcon,
} satisfies Meta<typeof UploadIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UploadIconStory: Story = {};
