import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";

const SidebarCopyright = () => {
  return (
    <>
      <Box
        borderRight={{ md: "1px solid #3d3d3d" }}
        pr={{ xs: 1, sm: 2, lg: 3 }}
      >
        <Sidebar />
        <Typography
          m={{ xs: "10px 0", md: " 16px 0 0 0" }}
          variant="subtitle2"
          color="white"
        >
          Copyright © 2022 by Maher
        </Typography>
      </Box>
    </>
  );
};

export default SidebarCopyright;
