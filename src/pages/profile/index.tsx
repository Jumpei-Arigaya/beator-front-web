import { NextPage } from "next";
import { DashBoard } from "@/components/layouts/DashBoard";
import { ProfileIcon } from "@/features/Profile/components/ProfileIcon";
import { Box, Typography } from "@mui/material";

const Profile: NextPage = () => {
  return (
    <main>
      <DashBoard>
        <ProfileIcon width={125} height={125} />
        <Box>
          <Typography fontSize="h6.fontSize">test0523</Typography>
          <Typography fontSize="h5.fontSize">のんちまる</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: 2,
            }}
          >
            <Typography fontSize="h4.fontSize" sx={{ lineHeight: 0.6 }}>
              888
            </Typography>
            <Typography fontSize="h6.fontSize">follow</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography fontSize="h4.fontSize" sx={{ lineHeight: 0.6 }}>
              888
            </Typography>
            <Typography fontSize="h6.fontSize">follower</Typography>
          </Box>
        </Box>
      </DashBoard>
    </main>
  );
};

export default Profile;
