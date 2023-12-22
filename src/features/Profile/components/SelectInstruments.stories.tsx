import type { Meta, StoryObj } from "@storybook/react";
import { SelectInstruments } from "./SelectInstruments";

const meta = {
  title: "features/Profile/components/SelectInstruments",
  component: SelectInstruments,
} satisfies Meta<typeof SelectInstruments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectInstrumentsStory: Story = {};
