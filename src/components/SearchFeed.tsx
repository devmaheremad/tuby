import { Stack, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Videos } from ".";
import { VideosType } from "../@types/Feed.types";
import { fetchFromRapidAPI } from "../utils/FetchFromRapidAPI";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState<VideosType[]>([]);
  useEffect(() => {
    fetchFromRapidAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Stack
      bgcolor="black"
      direction="column"
      sx={{
        flexDirection: { md: "row" },
      }}
      px={3}
      height="100vh"
    >
      <Box
        overflow={{
          xs: "auto",
          sm: "100%",
        }}
      >
        <Typography
          textAlign="center"
          variant="h4"
          color="primary"
          fontWeight="700"
          mt={2}
          ml={{ md: 3 }}
        >
          Search Results for{" "}
          <Typography
            component="span"
            variant="h4"
            color="white"
            fontWeight="700"
          >
            {searchTerm}{" "}
          </Typography>
          videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;
