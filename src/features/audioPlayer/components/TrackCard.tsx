import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

const TrackCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Add this to center items horizontally
        background: "blue",
        width: "200px", // Set the width
        height: "100px", // Set the height
        borderRadius: "8px", // Optional: if you want the Box to have rounded corners
        margin: 1,
        padding: 2,
      }}
    >
      <Image
        src="https://file.notion.so/f/f/eb6772bf-7bb6-4a08-af15-e450e54bae6d/9b990497-27e7-4c92-a7d9-daece827ebee/aladdin.jpeg?id=0fc6c857-9bbb-4ff0-ad64-662a27ec9d14&table=block&spaceId=eb6772bf-7bb6-4a08-af15-e450e54bae6d&expirationTimestamp=1696521600000&signature=iqyP7r1kzlCiLNtKOEw5qL_6aJIEjQnwefJHvJHyHEA&downloadName=aladdin.jpeg"
        width={80}
        height={80}
        alt="a bird"
        priority
      />
      <Box sx={{ ml: 1.5, minWidth: 0 }}>
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
