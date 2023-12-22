import { GuestHeader } from "../elements/GuestHeader";
import Box from "@mui/material/Box";
import { HEADER_HEIGHT } from "@/styles/layout";

type LayoutProps = {
  children: React.ReactNode;
};

export const GuestUserLayout: React.FC<LayoutProps> = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <GuestHeader />
      <Box sx={{ marginTop: HEADER_HEIGHT, width: "100%" }}>
        {props.children}
      </Box>
    </Box>
  );
};
