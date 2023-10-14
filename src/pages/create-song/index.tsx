import { NextPage } from "next";
import { DashBoard } from "@/components/layouts/DashBoard";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";

export const CreateSong: NextPage = () => {
  return (
    <main>
      <DashBoard>
        新規楽曲制作画面
        <SoundControlBar />
      </DashBoard>
    </main>
  );
};
