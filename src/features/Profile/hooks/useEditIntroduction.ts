import { useState } from "react";

/**
 * EditIntroductionコンポーネントに使用するカスタムフック
 */
export const useEditIntroduction = () => {
  const [textValue, setTextValue] = useState("");

  /**
   * テキストフィールドの次第文字数をコントロールする
   */
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 180) {
      setTextValue(event.target.value);
    }
  };

  return {
    textValue,
    setTextValue,
    handleTextChange,
  };
};
