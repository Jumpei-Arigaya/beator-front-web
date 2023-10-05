import type { Meta, StoryObj } from "@storybook/react";
import PlaySkipControls from "./PlaySkipControls";

const meta = {
  title: "features/playSong/components/PlaySkipControls",
  component: PlaySkipControls,
} satisfies Meta<typeof PlaySkipControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlaySkipControlsStory: Story = {};
