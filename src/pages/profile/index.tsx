import { NextPage } from "next";
import { DashBoard } from "@/components/layouts/DashBoard";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";

export const Profile: NextPage = () => {
  return (
    <main>
      <DashBoard>
        プロフィール画面
        <SoundControlBar />
      </DashBoard>
    </main>
  );
};
