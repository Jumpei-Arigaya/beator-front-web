import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ClearIcon from "@mui/icons-material/Clear";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { TextField } from "@mui/material";
import { IconUpload } from "./IconUpload";
import { ProfileIcon } from "./ProfileIcon";
import { ChoiceInstrument } from "./ChoiceInstrument";
import { InfoExit } from "./InfoExit";

/**
 * プロフィールに表示するアイコンコンポーネント
 */
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.7)", // 黒色の半透明背景
  zIndex: 999, // モーダルよりも手前に表示
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 600,
  bgcolor: "#f5f5f5", // 背景色を青色に変更
  color: "#000", // テキストの色を白に設定（任意）
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};
type ProfileModalProps = {};

export const ProfileModal: React.FC<ProfileModalProps> = ({}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          color: "inherit",
          backgroundColor: "transparent",
        }}
      >
        <SettingsRoundedIcon sx={{ fontSize: "35px" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", marginTop: "-20px" }}>
            <button
              onClick={handleClose}
              style={{ border: "none", background: "none" }}
            >
              <ClearIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
            </button>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ marginTop: "3px" }}
            >
              プロフィール編集
            </Typography>
            <SaveAltIcon sx={{ fontSize: "35px", marginLeft: "660px" }} />
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            ここに編集する機能をつける
            <ProfileIcon />
            <IconUpload />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "70%",
              }}
            >
              <TextField label="UserID" style={{ width: "70%" }} />
              <TextField label="Name" style={{ width: "70%" }} />
            </Box>
            <ChoiceInstrument />
            <InfoExit />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
