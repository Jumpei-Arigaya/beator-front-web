import type { Meta, StoryObj } from "@storybook/react";
import { VolumeSlider } from "./VolumeSlider";

const meta = {
  title: "features/playSong/components/VolumeSlider",
  component: VolumeSlider,
} satisfies Meta<typeof VolumeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VolumeSliderStory: Story = {};
