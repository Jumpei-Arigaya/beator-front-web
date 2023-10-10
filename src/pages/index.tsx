import { Inter } from "next/font/google";
import DashBoard from "@/components/layouts/DashBoard";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";
import { PostCard } from "@/features/lookingForParts/components/PostCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DashBoard>
        <PostCard />
        <SoundControlBar />
      </DashBoard>
    </main>
  );
}
