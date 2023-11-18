import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

/**
 * InfoEditコンポーネントのPropsの型定義
 */
type InfoEditProps = {};

/**
 * 自己紹介文テキストフィールドコンポーネント
 */
export const InfoEdit: React.FC<InfoEditProps> = ({}) => {
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
          label="自己紹介"
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
