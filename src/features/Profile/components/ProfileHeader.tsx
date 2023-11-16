import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBar } from "@mui/material";

/**
 * プロフィールモダール時に表示するヘッダコンポーネント
 */
export const ProfileHeader: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" marginLeft={10}>
            Edit Profile
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
