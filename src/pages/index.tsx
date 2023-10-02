import { Inter } from "next/font/google";
import DashBoard from "@/components/layouts/DashBoard";
import Audio from "@/features/audioList/components/Audio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DashBoard>
        <Audio />
      </DashBoard>
    </main>
  );
}
