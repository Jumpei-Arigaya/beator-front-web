import VolumeSlider from "./VolumeSlider";
import Box from "@mui/material/Box";
import PlaySkipControls from "./PlaySkipControls";
import PlayBackBar from "./PlayBackBar";
import TrackCard from "./TrackCard";

export default function SoundControlBar() {
  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "red",
        position: "fixed",
        bottom: 0,
      }}
    >
      <TrackCard />
      <PlayBackBar />
      <PlaySkipControls />
      <VolumeSlider />
    </Box>
  );
}
