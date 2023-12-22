import { Typography } from "@mui/material";

/**
 * 自己紹介文を表示させるコンポーネント
 */
export const Introduction: React.FC = () => {
  return (
    <Typography
      fontSize="h6.fontSize"
      sx={{ lineHeight: 1.2, marginTop: "0.5em" }}
    >
      ここに自己紹介文が入ります。
      <br /> ユーザーの自由入力になります。
      <br />
      最大で180文字にする予定です。
      <br />
      テキストの大きさなどは追って変更します。
      <br />
    </Typography>
  );
};
