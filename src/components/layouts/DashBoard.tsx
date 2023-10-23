import { Header } from "../elements/Header";
import Box from "@mui/material/Box";
import { SoundControlBar } from "@/features/audioPlayer/components/SoundControlBar";

type LayoutProps = {
  children: React.ReactNode;
};

export const DashBoard: React.FC<LayoutProps> = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Box sx={{ marginTop: "64px", width: "100%" }}>{props.children}</Box>
      <SoundControlBar />
    </Box>
  );
};
