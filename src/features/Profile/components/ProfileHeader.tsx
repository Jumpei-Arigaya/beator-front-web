import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBar } from "@mui/material";

/**
 * ProfileHeaderコンポーネントのPropsの型定義
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
