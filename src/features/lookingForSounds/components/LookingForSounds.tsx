import { useLookingForSounds } from "@/features/lookingForSounds/hooks/useLookingForSounds";
import { PostCard } from "./PostCard";
import { Grid, Typography, Button, Box } from "@mui/material";

/**
 * サウンド募集中の楽曲一覧コンポーネント
 */
const LookingForSounds = () => {
  const { play, handleAudioControl } = useLookingForSounds();

  return (
    <Grid container spacing={2} alignItems="center" sx={{ width: "100%" }}>
      <Grid item xs={6}>
        <Typography variant="subtitle1">パートを募集中の楽曲</Typography>
      </Grid>
      <Grid item xs={6} style={{ textAlign: "right" }}>
        <Typography variant="subtitle1">もっと見る</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <PostCard play={play} handleAudioControl={handleAudioControl} />
          <PostCard play={play} handleAudioControl={handleAudioControl} />
          <PostCard play={play} handleAudioControl={handleAudioControl} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LookingForSounds;
