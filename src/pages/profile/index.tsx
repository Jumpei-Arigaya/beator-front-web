import { Inter } from "next/font/google";
import DashBoard from "@/components/layouts/DashBoard";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";
import Profileicon from "@/pages/profile/profile-icon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DashBoard>
        プロフィール画面
        <Profileicon />
        <SoundControlBar />
      </DashBoard>
    </main>
  );
}
