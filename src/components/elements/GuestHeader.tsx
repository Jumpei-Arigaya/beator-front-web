import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Link from "next/link";

import { AppBar } from "@mui/material";

export const GuestHeader: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            <Typography variant="h6" noWrap component="div">
              B e a t O r
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
