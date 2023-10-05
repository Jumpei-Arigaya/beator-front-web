import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

const TrackCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: "110px",
        borderRadius: "8px",
      }}
    >
      <Image src={"/photo-jk.jpg"} width={50} height={50} alt="mock" priority />
      <Box>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          YOSHIKI
        </Typography>
        <Typography noWrap>
          <b>猫</b>
        </Typography>
      </Box>
    </Box>
  );
};

export default TrackCard;
