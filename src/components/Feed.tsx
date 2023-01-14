import { Stack, Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { HashLoaderContanier, Sidebar, Videos } from ".";
import { useStore } from "../useStore";
import { fetchFromRapidAPI } from "../utils/FetchFromRapidAPI";

const Feed = () => {
  let screenLoader = useStore(({ screenLoader }) => screenLoader);
  const selectedCategory = useStore(({ selectedCategory }) => selectedCategory);
  const videos = useStore(({ videos }) => videos);

  useEffect(() => {
    useStore.setState({ screenLoader: true });
    fetchFromRapidAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => {
        useStore.setState({ videos: data.items });
        useStore.setState({ screenLoader: false });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return screenLoader ? (
    <HashLoaderContanier />
  ) : (
    <Stack
      bgcolor="black"
      direction="column"
      sx={{
        flexDirection: { md: "row" },
      }}
      px={3}
      height="89.9vh"
    >
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
    </Stack>
  );
};

export default Feed;
