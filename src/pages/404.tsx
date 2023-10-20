import { NextPage } from "next";
import { GuestUserLayout } from "@/components/layouts/GuestUserLayout";
import { Box, Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <main>
      <GuestUserLayout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">404</Typography>
            <Typography variant="h5">NOT FOUND</Typography>
          </Box>
          <Typography variant="body1">
            お探しのページは見つかりません
          </Typography>
        </Box>
      </GuestUserLayout>
    </main>
  );
};

export default Home;
