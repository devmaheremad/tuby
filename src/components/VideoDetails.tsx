import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link, useParams } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import { useStore } from "../useStore";
const VideoDetails = () => {
  const { id } = useParams();

  const videoDetails = useStore(({ videoDetails }) => videoDetails);

  return (
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
        <Typography variant="h5" color="white" mt={2}>
          {videoDetails?.snippet.title}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Link to={`/channel/${videoDetails?.snippet.channelId}`}>
            <Typography variant="subtitle1" color="white">
              {videoDetails?.snippet.channelTitle}
              <CheckCircleIcon sx={{ fontSize: 14, ml: "8px" }} />
            </Typography>
          </Link>
          <Stack direction="row" spacing={2}>
            <Typography variant="subtitle1" color="gray">
              {videoDetails?.statistics.viewCount &&
                parseInt(videoDetails?.statistics.viewCount).toLocaleString()}
              views
            </Typography>
            <Typography variant="subtitle1" color="gray">
              {videoDetails?.statistics.likeCount &&
                parseInt(videoDetails?.statistics.likeCount).toLocaleString()}
              likes
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default VideoDetails;
