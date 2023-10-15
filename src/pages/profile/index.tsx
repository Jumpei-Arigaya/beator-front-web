import { Inter } from "next/font/google";
import DashBoard from "@/components/layouts/DashBoard";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";
import ProfileIcon from "@/features/Profile/components/ProfileIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DashBoard>
        プロフィール画面
        <ProfileIcon />
        <SoundControlBar />
      </DashBoard>
    </main>
  );
}
