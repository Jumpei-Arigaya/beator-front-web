import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import LyricsIcon from "@mui/icons-material/Lyrics";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material";
import { useState } from "react";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: 0,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Header: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            <Typography variant="h6" noWrap component="div">
              B e a t O r
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <ListItem disablePadding>
          <Link href="/" style={{ color: "black", textDecoration: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="ホーム画面" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            href="/song_list"
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <LibraryMusicIcon />
              </ListItemIcon>
              <ListItemText primary="楽曲一覧" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            href="/create_song"
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <LyricsIcon />
              </ListItemIcon>
              <ListItemText primary="楽曲新規制作" />{" "}
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            href="/profile"
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="プロフィール" />{" "}
            </ListItemButton>
          </Link>
        </ListItem>
      </Drawer>
    </div>
  );
};
