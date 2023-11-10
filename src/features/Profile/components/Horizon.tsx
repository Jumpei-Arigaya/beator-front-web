import { Divider } from "@mui/material";

/**
 * プロフィールに表示する水平線コンポーネント
 */

type HorizonProps = {
  orientation?: "horizontal" | "vertical";
  style?: React.CSSProperties;
};

export const Horizon: React.FC<HorizonProps> = ({
  orientation = "horizontal",
  style = { width: "80%" },
}) => {
  return <Divider orientation={orientation} style={style} />;
};
