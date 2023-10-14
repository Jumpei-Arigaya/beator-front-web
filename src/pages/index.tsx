import { NextPage } from "next";
import { DashBoard } from "@/components/layouts/DashBoard";
import LookingForSounds from "@/features/lookingForSounds/components/LookingForSounds";

const Home: NextPage = () => {
  return (
    <main>
      <DashBoard>
        <LookingForSounds />
      </DashBoard>
    </main>
  );
};

export default Home;
