import type { Meta, StoryObj } from "@storybook/react";
import PlayBackBar from "./PlayBackBar";

const meta = {
  title: "features/playSong/components/PlayBackBar",
  component: PlayBackBar,
} satisfies Meta<typeof PlayBackBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlayBackBarStory: Story = {};
