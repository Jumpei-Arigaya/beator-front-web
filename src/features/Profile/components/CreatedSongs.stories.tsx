import type { Meta, StoryObj } from "@storybook/react";
import { CreatedSongs } from "./CreatedSongs";

const meta = {
  title: "features/Profile/components/CreatedSongs",
  component: CreatedSongs,
} satisfies Meta<typeof CreatedSongs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CreatedSongsStory: Story = {};
