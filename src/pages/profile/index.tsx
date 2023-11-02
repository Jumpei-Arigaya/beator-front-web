import { NextPage } from "next";
import { DashBoard } from "@/components/layouts/DashBoard";
import { ProfileIcon } from "@/features/Profile/components/ProfileIcon";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { SocialConnection } from "@/features/Profile/components/SocialConnection";

const Profile: NextPage = () => {
  return (
    <main>
      <DashBoard>
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
          <SocialConnection />
          <Divider variant="middle" style={{ width: "80%" }} />
        </Box>
      </DashBoard>
    </main>
  );
};

export default Profile;
