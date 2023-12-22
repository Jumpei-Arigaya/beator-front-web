import { useState } from "react";

/**
 * ClickModalコンポーネントに使用するカスタムフック
 */
export const useClickModal = () => {
  const [open, setOpen] = useState(false);

  /**
   * プロフィールモーダルを開く
   */
  const handleOpen = () => setOpen(true);

  /**
   * プロフィールモーダルを閉じる
   */
  const handleClose = () => setOpen(false);

  return {
    open,
    handleOpen,
    handleClose,
  };
};
