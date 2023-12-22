import React from "react";
import { DashBoard } from "@/components/layouts/DashBoard";
import { ProfileIcon } from "@/features/Profile/components/ProfileIcon";
import { Box, Typography } from "@mui/material";
import { SocialConnection } from "@/features/Profile/components/SocialConnection";
import { Horizon } from "./Horizon";
import { Introduction } from "./Introduction";
import { CreatedSongs } from "./CreatedSongs";
import { MusicalInstrument } from "./MusicalInstrument";
import { EditProfileModal } from "./EditProfileModal";

/**
 * プロフィール画面を表示させるコンポーネント
 */
export const UserProfile: React.FC = () => {
  return (
    <main>
      <DashBoard>
        <Box
          sx={{
            position: "absolute",
            left: "80%",
            transform: "translateX(40%)",
            marginTop: 3,
          }}
        >
          <EditProfileModal />
        </Box>
        <Box sx={{ marginLeft: 30, marginTop: 2 }}>
          <Box sx={{ display: "flex" }}>
            <ProfileIcon width={90} height={90} />
            <Box sx={{ marginLeft: 5, marginTop: 1 }}>
              <Typography fontSize="h6.fontSize">test0523</Typography>

              <Typography fontSize="h4.fontSize" sx={{ lineHeight: 1.5 }}>
                のんちまる
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <SocialConnection />
            <MusicalInstrument />
          </Box>
          <Horizon />
          <Introduction />
          <CreatedSongs />
        </Box>
      </DashBoard>
    </main>
  );
};

export default UserProfile;
