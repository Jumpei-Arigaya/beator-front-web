import { useLookingForSound } from "@/features/lookingForSound/hooks/useLookingForSound";
import { PostCard } from "./PostCard";

/**
 * サウンド募集中の楽曲一覧コンポーネント
 */
const LookingForSound = () => {
  const { play, handleAudioControl } = useLookingForSound();
  return <PostCard play={play} handleAudioControl={handleAudioControl} />;
};

export default LookingForSound;
