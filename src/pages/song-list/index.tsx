import { NextPage } from "next";
import { DashBoard } from "@/components/layouts/DashBoard";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";

export const SongList: NextPage = () => {
  return (
    <main>
      <DashBoard>
        楽曲一覧画面
        <SoundControlBar />
      </DashBoard>
    </main>
  );
};
