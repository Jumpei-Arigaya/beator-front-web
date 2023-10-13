import { useState } from "react";

export const useLookingForParts = () => {
  const [play, setPlay] = useState(false);

  /**
   * 再生ボタンクリック時にオーディオをコントロールする
   */
  const handleAudioControl = () => {
    setPlay(!play);
  };

  return { play, handleAudioControl };
};
