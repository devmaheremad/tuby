import ReactPlayer from "react-player/youtube";
import { Stack, Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchFromRapidAPI } from "../utils/FetchFromRapidAPI";
import { relatedTovideo, VideoDetailTypes } from "./VideoDetailProps.types";
import VideoCard from "./VideoCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HashLoader from "react-spinners/HashLoader";

const VideoDetail = () => {
  const { id } = useParams();

  const [videoDetails, setVideoDetails] = useState<VideoDetailTypes>(
    {} as VideoDetailTypes
  );
  const [relatedTovide, setRelatedTovide] = useState<relatedTovideo[]>([
    {} as relatedTovideo,
  ]);

  useEffect(() => {
    fetchFromRapidAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    ).then((data) => setRelatedTovide(data.items));
    fetchFromRapidAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );
  }, [id]);

  if (!videoDetails?.snippet) {
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
  }

  const {
    snippet: { channelTitle, title, channelId },
    statistics: { likeCount, viewCount },
  } = videoDetails;

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      bgcolor="black"
      height="100vh"
      sx={{ overflowY: "scroll" }}
    >
      <Box
        sx={{ position: { xs: "unset", md: "sticky" }, top: "0" }}
        flexGrow={1}
      >
        <ReactPlayer
          width="100%"
          height="70%"
          style={{ minHeight: "500px" }}
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        <Box px={2}>
          <Typography variant="h4" color="white" mt={2}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Link to={`/channel/${channelId}`}>
              <Typography variant="subtitle1" color="white">
                {channelTitle}
                <CheckCircleIcon sx={{ fontSize: 14, ml: "8px" }} />
              </Typography>
            </Link>
            <Stack direction="row" spacing={2}>
              <Typography variant="subtitle1" color="gray">
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="subtitle1" color="gray">
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Stack
        gap={3}
        justifyContent={{ xs: "center", md: "start" }}
        direction={{ xs: "row", md: "column" }}
        flexWrap={{ xs: "wrap", md: "nowrap" }}
        mt={{ xs: "50px !important", md: "0 !important" }}
      >
        {relatedTovide.map((item, i) => {
          return (
            <Box key={i}>
              <VideoCard video={item} />
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default VideoDetail;
