import type { Meta, StoryObj } from "@storybook/react";
import { InfoEdit } from "./InfoEdit";

const meta = {
  title: "features/Profile/components/InfoEdit",
  component: InfoEdit,
} satisfies Meta<typeof InfoEdit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoEditStory: Story = {};
