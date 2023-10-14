import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import { Box, useTheme } from "@mui/material";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";

export const PlaySkipControls: React.FC = () => {
  const theme = useTheme();
  const [paused, setPaused] = useState(false);
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton aria-label="previous song" sx={{ paddingTop: "0" }}>
          <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
        <IconButton
          aria-label={paused ? "play" : "pause"}
          onClick={() => setPaused(!paused)}
          sx={{ paddingTop: "0" }}
        >
          {paused ? (
            <PlayArrowRounded
              sx={{ fontSize: "2rem" }}
              htmlColor={mainIconColor}
            />
          ) : (
            <PauseRounded sx={{ fontSize: "2rem" }} htmlColor={mainIconColor} />
          )}
        </IconButton>
        <IconButton aria-label="next song" sx={{ paddingTop: "0" }}>
          <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
      </Box>
    </>
  );
};
