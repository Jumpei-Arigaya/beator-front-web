import { GuestHeader } from "../elements/GuestHeader";
import Box from "@mui/material/Box";

type LayoutProps = {
  children: React.ReactNode;
};

export const GuestUserLayout: React.FC<LayoutProps> = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <GuestHeader />
      <Box sx={{ marginTop: "64px", width: "100%" }}>{props.children}</Box>
    </Box>
  );
};
