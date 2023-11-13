import { Typography, Stack, Chip } from "@mui/material";
/**
 * プロフィールに表示する担当楽器のコンポーネント
 */
type TantouGakkiProps = {};

export const TantouGakki: React.FC<TantouGakkiProps> = ({}) => {
  return (
    <>
      <Typography
        fontSize="h7.fontSize"
        sx={{ lineHeight: 1.5, margin: "0 1em" }}
      >
        担当楽器
      </Typography>
      <Stack
        alignItems="center"
        flexWrap="wrap"
        sx={{
          maxWidth: "800px",
          marginBottom: 0.3,
        }}
      >
        <Stack direction="row" flexWrap="wrap">
          <Chip label="ギター" color="secondary" sx={{ marginBottom: 0.3 }} />
          <Chip label="ドラム" color="secondary" />
          <Chip label="サックス" color="secondary" />
          <Chip label="ピアノ" color="secondary" />
          <Chip label="ベース" color="secondary" />
          <Chip label="アコギ" color="secondary" />
          <Chip label="タンバリン" color="secondary" />
          <Chip label="カスタネット" color="secondary" />
          <Chip label="カホン" color="secondary" />
          <Chip label="ボーカル" color="secondary" />
          <Chip label="DJ" color="secondary" />
          <Chip label="キーボード" color="secondary" />
          <Chip label="マラカス" color="secondary" />
        </Stack>
      </Stack>
    </>
  );
};
