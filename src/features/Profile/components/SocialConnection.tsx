import { Box, Typography } from "@mui/material";

/**
 * フォロワー数、フォロー数を表示させるコンポーネント
 */
export const SocialConnection: React.FC = () => {
  return (
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
  );
};
