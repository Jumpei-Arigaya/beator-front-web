import { Inter } from "next/font/google";
import DashBoard from "@/components/layouts/DashBoard";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";
import { Box } from "@mui/material";
import LookingForSounds from "@/features/lookingForSounds/components/LookingForSounds";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main style={{ backgroundColor: "green" }}>
      <DashBoard>
        <Box sx={{ display: "flex", width: "100%", backgroundColor: "red" }}>
          <LookingForSounds />
        </Box>
        <SoundControlBar />
      </DashBoard>
    </main>
  );
}
