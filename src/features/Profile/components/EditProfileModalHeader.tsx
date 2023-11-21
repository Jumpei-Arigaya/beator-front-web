import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBar } from "@mui/material";

/**
 * プロフィール編集モーダルのヘッダ
 */
export const EditProfileModalHeader: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" marginLeft={10}>
            プロフィール編集
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
