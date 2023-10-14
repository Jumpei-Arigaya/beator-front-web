import { useState } from "react";

/**
 * LookingForSoundsコンポーネントに使用するカスタムフック
 */
export const useLookingForSounds = () => {
  const [play, setPlay] = useState(false);
  const [isHoverdPostCard, setIsHoverdPostCard] = useState(false);

  /**
   * 再生ボタンクリック時にオーディオをコントロールする
   */
  const handleAudioControl = () => {
    setPlay(!play);
  };

  /**
   * PostCardコンポーネントホバー時のイベント関数
   */
  const handleMouseEnterPostCard = () => {
    setIsHoverdPostCard(true);
  };

  /**
   * PostCardコンポーネントホバー解除時のイベント関数
   */
  const handleMouseLeavePostCard = () => {
    setIsHoverdPostCard(false);
  };

  return {
    play,
    handleAudioControl,
    isHoverdPostCard,
    handleMouseEnterPostCard,
    handleMouseLeavePostCard,
  };
};
