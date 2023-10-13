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
export const AudioControl = ({
  play,
  handleAudioControl,
}: AudioControlProps) => {
  return (
    <>
      {play ? (
        <NotStartedIcon
          sx={{ fontSize: 50, alignItems: "flex-end" }}
          color="disabled"
          onClick={() => handleAudioControl()}
        />
      ) : (
        <PlayCircleIcon
          sx={{ fontSize: 50, alignItems: "flex-end" }}
          onClick={() => handleAudioControl()}
        />
      )}
    </>
  );
};
