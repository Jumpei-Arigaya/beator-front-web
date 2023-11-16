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
import { InfoEdit } from "./InfoEdit";
import { ProfileHeader } from "./ProfileHeader";

/**
 * プロフィールに表示するアイコンコンポーネント
 */
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.7)",
  zIndex: 999,
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 700,
  bgcolor: "#f5f5f5",
  color: "#000",
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
              <ClearIcon
                sx={{ fontSize: "35px", marginRight: "10px", color: "white" }}
              />
            </button>
            <div
              style={{
                position: "relative",
                zIndex: -1,
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <ProfileHeader />
              </Typography>
            </div>
            <SaveAltIcon
              sx={{ fontSize: "35px", marginLeft: "800px", color: "white" }}
            />
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ProfileIcon width={90} height={90} />
                <IconUpload />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "70%",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField label="UserID" style={{ width: "70%" }} />
                <TextField label="Name" style={{ width: "70%" }} />
              </Box>
            </div>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <ChoiceInstrument />
              <InfoEdit />
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
