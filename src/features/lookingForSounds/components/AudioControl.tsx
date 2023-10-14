import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import NotStartedIcon from "@mui/icons-material/NotStarted";

/**
 * AudioControlコンポーネントのPropsの型定義
 */
type AudioControlProps = {
  /**
   * オーディオの再生状態
   */
  play: boolean;
  /**
   * オーディオコントロールクリック時のイベント関数
   */
  handleAudioControl: () => void;
};

/**
 * オーディオコントロールを行うコンポーネント
 */
export const AudioControl: React.FC<AudioControlProps> = (props) => {
  return (
    <>
      {props.play ? (
        <NotStartedIcon
          sx={{ fontSize: 50, alignItems: "flex-end" }}
          color="disabled"
          onClick={() => props.handleAudioControl()}
        />
      ) : (
        <PlayCircleIcon
          sx={{ fontSize: 50, alignItems: "flex-end" }}
          onClick={() => props.handleAudioControl()}
        />
      )}
    </>
  );
};
