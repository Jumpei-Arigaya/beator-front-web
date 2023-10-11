import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/material";
import { useState } from "react";
import { AudioControl } from "./AudioControl";

export const PostCard = () => {
  const [play, setPlay] = useState(false);

  /**
   * 再生ボタンクリック時にオーディオをコントロールする
   */
  const handleAudioControl = () => {
    setPlay(!play);
  };

  return (
    <Card sx={{ minWidth: "210px", minHeight: "210px", cursor: "pointer" }}>
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ marginTop: 1 }}>
            <Typography variant="body2">ジャンル</Typography>
            <Chip label="ロック" color="primary" size="small" />
          </Box>
          <AudioControl
            play={play}
            setPlay={setPlay}
            handleAudioControl={handleAudioControl}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
