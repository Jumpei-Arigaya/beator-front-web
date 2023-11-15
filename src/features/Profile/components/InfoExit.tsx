import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

/**
 * プロフィールモーダルに表示する自己紹介編集コンポーネント
 */
type InfoExitProps = {};

export const InfoExit: React.FC<InfoExitProps> = ({}) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0, width: "101ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-textarea"
          label="Self introduction"
          placeholder="Maximum of 180 characters"
          self-introduction
        />
      </div>
    </Box>
  );
};
