import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Link from "next/link";

import { AppBar } from "@mui/material";

export const ProfileHeader: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Edit Profile
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
