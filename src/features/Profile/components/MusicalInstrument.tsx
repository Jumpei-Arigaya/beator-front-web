import { Typography, Stack, Chip } from "@mui/material";

/**
 * MusicalInstrumentのコンポーネントのPropsの型定義
 */
type MusicalInstrumentProps = {};

/**
 * 担当楽器のチップを表示させるコンポーネント
 */
export const MusicalInstrument: React.FC<MusicalInstrumentProps> = ({}) => {
  return (
    <>
      <Typography
        fontSize="h7.fontSize"
        sx={{ lineHeight: 2, margin: "0 1em", marginTop: 1 }}
      >
        担当楽器
      </Typography>
      <Stack
        alignItems="center"
        flexWrap="wrap"
        sx={{
          maxWidth: "800px",
          marginBottom: 0.5,
          marginTop: 1,
        }}
      >
        <Stack direction="row" flexWrap="wrap" sx={{ height: 100 }}>
          <Chip label="ギター" color="secondary" />
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
          <Chip label="サックス" color="secondary" />
          <Chip label="トランペット" color="secondary" />
          <Chip label="ホルン" color="secondary" />
          <Chip label="トロンボーン" color="secondary" />
          <Chip label="ピッコロ" color="secondary" />
          <Chip label="フルート" color="secondary" />
          <Chip label="アルトサックス" color="secondary" />
          <Chip label="ソロギター" color="secondary" />
          <Chip label="木琴" color="secondary" />
          <Chip label="鉄琴" color="secondary" />
          <Chip label="パーカッション" color="secondary" />
        </Stack>
      </Stack>
    </>
  );
};
