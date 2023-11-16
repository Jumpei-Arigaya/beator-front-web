import type { Meta, StoryObj } from "@storybook/react";
import { Introduction } from "./Introduction";

const meta = {
  title: "features/Profile/components/Introduction",
  component: Introduction,
} satisfies Meta<typeof Introduction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IntroductionStory: Story = {};
