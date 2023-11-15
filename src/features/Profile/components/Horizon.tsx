import { Divider } from "@mui/material";

/**
 * HorizonのコンポーネントのPropsの型定義
 */
type HorizonProps = {
  orientation?: "horizontal" | "vertical";
  style?: React.CSSProperties;
};

/**
 * 水平線を表示させるコンポーネント
 */
export const Horizon: React.FC<HorizonProps> = ({
  orientation = "horizontal",
  style = { width: "80%" },
}) => {
  return <Divider orientation={orientation} style={style} />;
};
