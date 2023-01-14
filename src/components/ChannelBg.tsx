import { Box } from "@mui/material";

const ChannelBg = () => {
  return (
    <Box
      height={{ xs: "200px", sm: "300px" }}
      width="100%"
      sx={{
        background:
          "linear-gradient(90deg, rgb(0, 238, 247) 0%, rgb(206, 3, 184) 100%, rgb(0, 212, 255) 100%);",
      }}
    ></Box>
  );
};

export default ChannelBg;
