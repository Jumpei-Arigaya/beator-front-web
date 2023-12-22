import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const MusicalInstrument = [
  { title: "ギター" },
  { title: "ドラム" },
  { title: "サックス" },
  { title: "ピアノ" },
  { title: "ベース" },
  { title: "アコギ" },
  { title: "タンバリン" },
  { title: "カスタネット" },
  { title: "カホン" },
  { title: "ボーカル" },
  { title: "DJ" },
  { title: "キーボード" },
  { title: "マラカス" },
  { title: "トランペット" },
  { title: "ホルン" },
  { title: "トロンボーン" },
  { title: "ピッコロ" },
  { title: "フルート" },
  { title: "アルトサックス" },
  { title: "ソロギター" },
  { title: "木琴" },
  { title: "鉄琴" },
  { title: "パーカッション" },
];

/**
 *  担当楽器選択ボックスのコンポーネント
 */
export const SelectInstruments: React.FC = () => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={MusicalInstrument}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            style={{ marginRight: 8 }}
            checked={selected}
          />

          {option.title}
        </li>
      )}
      style={{ width: 900 }}
      renderInput={(params) => <TextField {...params} label="担当楽器" />}
    />
  );
};
