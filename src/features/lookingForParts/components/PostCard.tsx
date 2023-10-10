import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

export const PostCard = () => {
  return (
    <Card sx={{ minWidth: 275, minHeight: 230 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          YOSHIKI
        </Typography>
        <Typography variant="h5" component="div">
          猫
        </Typography>
        <Typography variant="body2">募集パート</Typography>
        <Chip label="ギター" color="secondary" size="small" />
        <Chip label="ベース" color="secondary" size="small" />
        <Typography variant="body2">ジャンル</Typography>
        <Chip label="ロック" color="primary" size="small" />
      </CardContent>
    </Card>
  );
};
