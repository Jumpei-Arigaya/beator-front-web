import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/material";
import { AudioControl } from "./AudioControl";

/**
 * PostCardコンポーネントのPropsの型定義
 */
type PostCardProps = {
  /**
   * オーディオの再生状態
   */
  play: boolean;
  /**
   * オーディオコントロールクリック時のイベント関数
   */
  handleAudioControl: () => void;
  /**
   * オーディオコントロールの表示状態
   */
  isHoverdPostCard: boolean;
  /**
   * PostCardコンポーネントホバー時のイベント関数
   */
  handleMouseEnterPostCard: () => void;
  /**
   * PostCardコンポーネントホバー解除時のイベント関数
   */
  handleMouseLeavePostCard: () => void;
};

/**
 * 楽曲情報投稿コンポーネント
 */
export const PostCard = (props: PostCardProps) => {
  return (
    <Card
      sx={{
        width: "220px",
        height: "220px",
        marginRight: "20px",
        cursor: "pointer",
        position: "relative",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "rgba(240, 240, 240, 0.5)",
        },
      }}
      onMouseEnter={props.handleMouseEnterPostCard}
      onMouseLeave={props.handleMouseLeavePostCard}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          YOSHIKI
        </Typography>
        <Typography variant="h5" component="div">
          猫
        </Typography>
        <Box sx={{ marginTop: 1 }}>
          <Typography variant="body2">募集パート</Typography>
          <Chip label="ギター" color="secondary" size="small" />
          <Chip label="ベース" color="secondary" size="small" />
          <Chip label="サックス" color="secondary" size="small" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ marginTop: 1 }}>
            <Typography variant="body2">ジャンル</Typography>
            <Chip label="ロック" color="primary" size="small" />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            zIndex: 1,
            opacity: props.isHoverdPostCard || props.play ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          <AudioControl {...props} />
        </Box>
      </CardContent>
    </Card>
  );
};
