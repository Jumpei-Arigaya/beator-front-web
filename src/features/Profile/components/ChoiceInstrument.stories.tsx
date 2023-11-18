import type { Meta, StoryObj } from "@storybook/react";
import { ChoiceInstrument } from "./ChoiceInstrument";

const meta = {
  title: "features/Profile/components/ChoiceInstrument",
  component: ChoiceInstrument,
} satisfies Meta<typeof ChoiceInstrument>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChoiceInstrumentStory: Story = {};
