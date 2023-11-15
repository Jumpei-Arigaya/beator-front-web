import { Typography } from "@mui/material";
import { Horizon } from "./Horizon";
import { PostCard } from "@/features/lookingForSounds/components/PostCard";

/**
 * CreatedSongsのコンポーネントのPropsの型定義
 */
type CreatedSongsProps = {};

/**
 * 投稿した楽曲一覧を表示させるコンポーネント
 */
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
          handleAudioControl={() => alert("クリック対象なし")}
          isHoverdPostCard={false}
          handleMouseEnterPostCard={() => alert("ホバーされました")}
          handleMouseLeavePostCard={() => alert("ホバーが解除されました")}
        />
      </div>
    </>
  );
};
