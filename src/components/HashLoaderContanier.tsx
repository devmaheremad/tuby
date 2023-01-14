import { HashLoader } from "react-spinners";
import { Box } from "@mui/material";

const HashLoaderContanier = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      bgcolor="black"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <HashLoader color="#fc1503" loading size={120} />
    </Box>
  );
};

export default HashLoaderContanier;
