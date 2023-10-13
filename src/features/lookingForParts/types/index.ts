/**
 * AudioControlのPropsの型定義
 */
export type AudioControlProps = {
  /**
   * オーディオの再生状態
   */
  play: boolean;
  /**
   * オーディオコントロールクリック時のイベント関数
   */
  handleAudioControl: () => void;
};
