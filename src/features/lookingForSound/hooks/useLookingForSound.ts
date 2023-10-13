import { useState } from "react";

/**
 * サウンド募集中の楽曲一覧コンポーネントに使用するカスタムフック
 */
export const useLookingForSound = () => {
  const [play, setPlay] = useState(false);

  /**
   * 再生ボタンクリック時にオーディオをコントロールする
   */
  const handleAudioControl = () => {
    setPlay(!play);
  };

  return { play, handleAudioControl };
};
