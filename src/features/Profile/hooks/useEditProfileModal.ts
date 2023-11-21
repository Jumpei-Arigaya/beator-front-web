import { useState } from "react";
/**
 * ClickModalコンポーネントに使用するカスタムフック
 */
export const useClickModal = () => {
  const [open, setOpen] = useState(false);

  /**
   * プロフィール編集モーダルボタンのクリックイベントのコンポーネント
   */
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return {
    open,
    handleOpen,
    handleClose,
  };
};
