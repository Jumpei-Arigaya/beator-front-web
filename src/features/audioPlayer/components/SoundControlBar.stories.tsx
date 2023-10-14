import type { Meta, StoryObj } from "@storybook/react";
import { SoundControlBar } from "./SoundControlBar";

const meta = {
  title: "features/playSong/components/SoundControlBar",
  component: SoundControlBar,
} satisfies Meta<typeof SoundControlBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SoundControlBarStory: Story = {};
