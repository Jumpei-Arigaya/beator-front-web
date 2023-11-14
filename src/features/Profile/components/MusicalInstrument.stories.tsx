import type { Meta, StoryObj } from "@storybook/react";
import { TantouGakki } from "./MusicalInstrument";

const meta = {
  title: "features/Profile/components/TantouGakki",
  component: TantouGakki,
} satisfies Meta<typeof TantouGakki>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TantouGakkiStory: Story = {};
