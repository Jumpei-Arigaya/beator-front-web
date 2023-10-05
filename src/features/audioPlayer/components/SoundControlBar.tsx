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
        height: "80px",
        background: "#EEEEEE",
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 1,
      }}
    >
      <TrackCard />
      <Box sx={{ width: "100%", alignItems: "center" }}>
        <PlayBackBar />
        <PlaySkipControls />
      </Box>
      <VolumeSlider />
    </Box>
  );
}
