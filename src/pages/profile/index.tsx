import { Inter } from "next/font/google";
import DashBoard from "@/components/layouts/DashBoard";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";

import * as React from "react";
import Avatar from "@mui/material/Avatar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DashBoard>
        プロフィール画面
        <Avatar alt="profile-image" src="/face-me.jpg" />
        <SoundControlBar />
      </DashBoard>
    </main>
  );
}
