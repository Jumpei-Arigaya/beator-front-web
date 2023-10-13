import React from "react";
import { PostCard } from "./PostCard";
import { useLookingForParts } from "../hooks/useLookingForParts";

const LookingForParts = () => {
  const { play, handleAudioControl } = useLookingForParts();
  return <PostCard play={play} handleAudioControl={handleAudioControl} />;
};

export default LookingForParts;
