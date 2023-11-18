import type { Meta, StoryObj } from "@storybook/react";
import { MusicalInstrument } from "./MusicalInstrument";

const meta = {
  title: "features/Profile/components/",
  component: MusicalInstrument,
} satisfies Meta<typeof MusicalInstrument>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MusicalInstrumentStory: Story = {};
