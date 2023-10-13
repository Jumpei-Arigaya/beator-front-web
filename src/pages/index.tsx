import { Inter } from "next/font/google";
import DashBoard from "@/components/layouts/DashBoard";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";
import { Box } from "@mui/material";
import LookingForSound from "@/features/lookingForSound/components/LookingForSound";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DashBoard>
        <Box sx={{ display: "flex" }}>
          <LookingForSound />
        </Box>
        <SoundControlBar />
      </DashBoard>
    </main>
  );
}
