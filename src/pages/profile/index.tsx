import { NextPage } from "next";
import { DashBoard } from "@/components/layouts/DashBoard";
import ProfileIcon from "@/features/Profile/components/ProfileIcon";

const Profile: NextPage = () => {
  return (
    <main>
      <DashBoard>
        プロフィール画面
        <ProfileIcon />
      </DashBoard>
    </main>
  );
};

export default Profile;
