import { NextPage } from "next";
import { GuestUserLayout } from "@/components/layouts/GuestUserLayout";

const Home: NextPage = () => {
  return (
    <main>
      <GuestUserLayout>エラー画面</GuestUserLayout>
    </main>
  );
};

export default Home;
