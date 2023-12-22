import { useState } from "react";

/**
 * EditIntroductionコンポーネントに使用するカスタムフック
 */
export const useEditIntroduction = () => {
  const [textValue, setTextValue] = useState("");

  /**
   * 自己紹介文を更新する
   */
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 180) {
      setTextValue(event.target.value);
    } else {
      alert("自己紹介文は180文字以内で入力してください");
    }
  };

  return {
    textValue,
    handleTextChange,
  };
};
