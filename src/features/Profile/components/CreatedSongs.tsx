import { Typography } from "@mui/material";
import { Horizon } from "./Horizon";
import { PostCard } from "@/features/lookingForSounds/components/PostCard";

/**
 * CreatedSongsコンポーネントのPropsの型定義
 */
type CreatedSongsProps = {};

export const CreatedSongs: React.FC<CreatedSongsProps> = ({}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Typography sx={{ marginTop: "0.5em", fontSize: "20px" }}>
          投稿した楽曲一覧
        </Typography>
        <Horizon style={{ width: "65%", marginBottom: "0.8em" }} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <PostCard
          play={false}
          handleAudioControl={function (): void {
            throw new Error("Function not implemented.");
          }}
          isHoverdPostCard={false}
          handleMouseEnterPostCard={function (): void {
            throw new Error("Function not implemented.");
          }}
          handleMouseLeavePostCard={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </>
  );
};
