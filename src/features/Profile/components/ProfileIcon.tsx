import Avatar from "@mui/material/Avatar";

/**
 * プロフィールに表示するアイコンコンポーネント
 */
type ProfileIconProps = {
  width?: number;
  height?: number;
};

export const ProfileIcon: React.FC<ProfileIconProps> = ({
  width = 64,
  height = 64,
}) => {
  return (
    <Avatar alt="profile-image" src="/face-me.jpg" sx={{ width, height }} />
  );
};
