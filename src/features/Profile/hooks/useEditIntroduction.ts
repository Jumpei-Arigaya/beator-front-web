import { useState } from "react";

/**
 * EditIntroductionコンポーネントに使用するカスタムフック
 */
export const useEditIntroduction = () => {
  const [textValue, setTextValue] = useState("");

  /**
   * テキストフィールドの最大文字数をコントロールする
   */
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 180) {
    }
  };

  return {
    textValue,
    setTextValue,
    handleTextChange,
  };
};
