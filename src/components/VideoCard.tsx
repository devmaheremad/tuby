import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  subTitle,
} from "../utils/constants";
import { VideoCardProps } from "../@types/VideoCard.types";
import HashLoaderContanier from "./HashLoaderContanier";

export default function VideoCard({ video }: VideoCardProps) {
  if (!video?.id) {
    return <HashLoaderContanier />;
  }

  const {
    id: { videoId },
    snippet: {
      channelId,
      channelTitle,
      title,
      thumbnails: {
        medium: { url },
      },
    },
  } = video;

  return (
    <Card
      sx={{
        minHeight: "300px",
        minWidth: {
          xxl: "348px",
        },
        margin: "auto",
        bgcolor: "#1e1e1e",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={url || demoThumbnailUrl}
          alt={title || demoVideoTitle}
          sx={{
            height: "180px",
          }}
        />
      </Link>
      <CardContent>
        <Typography
          variant="body1"
          component="p"
          sx={{ lineHeight: "23px", height: "46px" }}
        >
          <Link
            to={videoId ? `/video/${videoId}` : demoVideoUrl}
            style={{
              color: "#fff",
              display: "inline-block",
              maxWidth: "280px",
            }}
          >
            {subTitle(title || demoVideoTitle)}
          </Link>
        </Typography>
        <Typography variant="subtitle2" component="p" m={0}>
          <Link
            to={channelId ? `/channel/${channelId}` : demoChannelUrl}
            style={{ color: "GrayText" }}
          >
            {channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: 14, ml: "8px" }} />
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
