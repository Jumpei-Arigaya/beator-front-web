import { NextPage } from "next";
import { DashBoard } from "@/components/layouts/DashBoard";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";
import LookingForSounds from "@/features/lookingForSounds/components/LookingForSounds";

const Home: NextPage = () => {
  return (
    <main>
      <DashBoard>
        <LookingForSounds />
        <SoundControlBar />
      </DashBoard>
    </main>
  );
};

export default Home;
