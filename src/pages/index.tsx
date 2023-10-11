import { Inter } from "next/font/google";
import DashBoard from "@/components/layouts/DashBoard";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";
import { PostCard } from "@/features/lookingForParts/components/PostCard";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DashBoard>
        <Box sx={{ display: "flex" }}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Box>
        <SoundControlBar />
      </DashBoard>
    </main>
  );
}
