import React from "react";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import NotStartedIcon from "@mui/icons-material/NotStarted";
import { AudioControlProps } from "../types/AudioControlProps";

export const AudioControl = ({
  play,
  setPlay,
  handleAudioControl,
}: AudioControlProps) => {
  return (
    <div>
      {play ? (
        <NotStartedIcon
          sx={{ fontSize: 50, alignItems: "flex-end" }}
          color="disabled"
          onClick={() => handleAudioControl()}
        />
      ) : (
        <PlayCircleIcon
          sx={{ fontSize: 50, alignItems: "flex-end" }}
          onClick={() => handleAudioControl()}
        />
      )}
    </div>
  );
};
