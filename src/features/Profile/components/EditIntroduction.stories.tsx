import type { Meta, StoryObj } from "@storybook/react";
import { EditIntroduction } from "./EditIntroduction";

const meta = {
  title: "features/Profile/components/EditIntroduction",
  component: EditIntroduction,
} satisfies Meta<typeof EditIntroduction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EditIntroductionStory: Story = {};
