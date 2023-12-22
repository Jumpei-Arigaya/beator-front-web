import { useLookingForSounds } from "@/features/lookingForSounds/hooks/useLookingForSounds";
import { useLookingForSoundsAPI } from "@/features/lookingForSounds/api/useGetLookingForSoundsAPI";
import { PostCard } from "./PostCard";
import { Grid, Typography, Paper } from "@mui/material";

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

  const { sounds, isLoading, error } = useLookingForSoundsAPI();

  if (isLoading) return <p>読み込み中</p>;
  if (error) return <p>エラーが発生しました</p>;

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
          {sounds?.map((sound, index) => {
            // 一時的に4件まで表示
            if (!sound || index > 3) {
              return;
            }

            return (
              <Grid item key={index}>
                <PostCard
                  play={play}
                  handleAudioControl={handleAudioControl}
                  isHoverdPostCard={isHoverdPostCard}
                  handleMouseEnterPostCard={handleMouseEnterPostCard}
                  handleMouseLeavePostCard={handleMouseLeavePostCard}
                  sound={sound}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Paper>
  );
};
