import { Inter } from "next/font/google";
import DashBoard from "@/components/layouts/DashBoard";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";
import LookingForSounds from "@/features/lookingForSounds/components/LookingForSounds";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DashBoard>
        <LookingForSounds />
        <SoundControlBar />
      </DashBoard>
    </main>
  );
}
