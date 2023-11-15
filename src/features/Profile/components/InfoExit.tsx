import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

/**
 * プロフィールモーダルに表示する自己紹介編集コンポーネント
 */
type InfoExitProps = {};

export const InfoExit: React.FC<InfoExitProps> = ({}) => {
  const [textValue, setTextValue] = React.useState("");
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 180) {
      setTextValue(event.target.value);
    }
  };
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
          multiline
          rows={4}
          value={textValue}
          onChange={handleTextChange}
        />
      </div>
    </Box>
  );
};
