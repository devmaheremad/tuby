import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  HashLoaderContanier,
  RelatedTovideo,
  VideoDetails,
} from "../components";
import { useStore } from "../useStore";
import { fetchFromRapidAPI } from "../utils/FetchFromRapidAPI";

const VideoDetail = () => {
  const { id } = useParams();
  const videoDetails = useStore(({ videoDetails }) => videoDetails);

  useEffect(() => {
    fetchFromRapidAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      useStore.setState({ videoDetails: data.items[0] })
    );
    fetchFromRapidAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    ).then((data) => useStore.setState({ relatedToVideo: data.items }));
  }, [id]);

  if (videoDetails == null) {
    return <HashLoaderContanier />;
  }

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      bgcolor="black"
      height="100vh"
      sx={{ overflowY: "scroll" }}
    >
      <VideoDetails />
      <RelatedTovideo />
    </Stack>
  );
};

export default VideoDetail;
