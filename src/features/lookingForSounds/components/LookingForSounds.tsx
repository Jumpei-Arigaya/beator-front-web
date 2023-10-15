import { useLookingForSounds } from "@/features/lookingForSounds/hooks/useLookingForSounds";
import { PostCard } from "./PostCard";
import { Grid, Typography, Button, Box, Paper } from "@mui/material";

/**
 * サウンド募集中の楽曲一覧コンポーネント
 */
export const LookingForSounds: React.FC = () => {
  const {
    play,
    handleAudioControl,
    isHoverdPostCard,
    handleMouseEnterPostCard,
    handleMouseLeavePostCard,
  } = useLookingForSounds();

  return (
    <Paper sx={{ margin: "20px" }}>
      <Grid
        container
        alignItems="center"
        sx={{ width: "100%", padding: "10px" }}
      >
        <Grid item xs={6}>
          <Typography variant="subtitle1">パートを募集中の楽曲</Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Typography variant="subtitle1">もっと見る</Typography>
        </Grid>
        <Grid container item xs={12} sx={{ marginTop: "10px" }}>
          {[...Array(4)].map((_, index) => (
            <Grid item key={index}>
              <PostCard
                play={play}
                handleAudioControl={handleAudioControl}
                isHoverdPostCard={isHoverdPostCard}
                handleMouseEnterPostCard={handleMouseEnterPostCard}
                handleMouseLeavePostCard={handleMouseLeavePostCard}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};
