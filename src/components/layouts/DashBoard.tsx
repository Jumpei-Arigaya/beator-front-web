import { NextPage } from "next";
import Box from "@mui/material/Box";
import Header from "../elements/Header";
import SoundControlBar from "@/features/audioPlayer/components/SoundControlBar";

type LayoutProps = {
  children: React.ReactNode;
};

export const DashBoard: NextPage<LayoutProps> = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Box sx={{ marginTop: "64px", width: "100%" }}>{props.children}</Box>
      <SoundControlBar />
    </Box>
  );
};
