import { Inter } from "next/font/google";
import DashBoard from "@/components/layouts/DashBoard";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DashBoard>
        <SoundControlBar />
      </DashBoard>
    </main>
  );
}
