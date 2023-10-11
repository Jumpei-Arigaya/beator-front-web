import { Dispatch, SetStateAction } from "react";

export type AudioControlProps = {
  /**
   * オーディオコントロール管理フラグ
   */
  play: boolean;
  /**
   * オーディオコントロール管理フラグ更新関数
   */
  setPlay: Dispatch<SetStateAction<boolean>>;
  /**
   * オーディオコントロールクリック時のイベント関数
   */
  handleAudioControl: () => void;
};
