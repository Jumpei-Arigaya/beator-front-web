import { NextPage } from "next";
import { DashBoard } from "@/components/layouts/DashBoard";
import { ProfileIcon } from "@/features/Profile/components/ProfileIcon";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const Profile: NextPage = () => {
  return (
    <main>
      <DashBoard>
        <Box sx={{ marginLeft: 30, marginTop: 2 }}>
          <Box sx={{ display: "flex" }}>
            <ProfileIcon width={110} height={110} />
            <Box sx={{ marginLeft: 5, marginTop: 4 }}>
              <Typography fontSize="h6.fontSize">test0523</Typography>
              <Typography fontSize="h4.fontSize" sx={{ lineHeight: 1.5 }}>
                のんちまる
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: 2,
            }}
          >
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
          <Divider variant="middle" style={{ width: "70%" }} />
        </Box>
      </DashBoard>
    </main>
  );
};

export default Profile;
