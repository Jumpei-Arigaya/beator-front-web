import type { Meta, StoryObj } from "@storybook/react";
import TrackCard from "./TrackCard";

const meta = {
  title: "features/playSong/components/TrackCard",
  component: TrackCard,
} satisfies Meta<typeof TrackCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TrackCardStory: Story = {};
