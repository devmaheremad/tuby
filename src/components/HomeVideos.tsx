import { Box, Typography } from "@mui/material";
import { useStore } from "../useStore";
import Videos from "./Videos";

const HomeVideos = () => {
  const selectedCategory = useStore(({ selectedCategory }) => selectedCategory);
  const videos = useStore(({ videos }) => videos);

  return (
    <Box
      overflow={{
        xs: "auto",
        sm: "100%",
      }}
    >
      <Typography
        variant="h4"
        color="primary"
        fontWeight="700"
        mt={2}
        ml={{ md: 3 }}
      >
        <Typography
          component="span"
          variant="h4"
          color="white"
          fontWeight="700"
        >
          {selectedCategory}{" "}
        </Typography>
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default HomeVideos;
