import { Card, Typography, CardMedia } from "@mui/material";
import { ChannelCardProps } from "./ChannelCard.types";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
} from "../utils/constants";

const ChannelCard = ({ channelDetails }: ChannelCardProps) => {
  if (!channelDetails?.id) {
    return <p>"Loading..."</p>;
  }
  const {
    id: { channelId },
    snippet: {
      title,
      thumbnails: {
        medium: { url },
      },
    },
  } = channelDetails;

  return (
    <Card
      sx={{
        height: "350px",
        bgcolor: "#1e1e1e",
        width: {
          xxl: "320px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
        <CardMedia
          sx={{ borderRadius: "50%", width: 180 }}
          component="img"
          image={url || demoThumbnailUrl}
          alt={title || demoChannelTitle}
          height={180}
        />
      </Link>
      <Typography variant="h6" component="p" my={2}>
        <Link
          to={channelId ? `/channel/${channelId}` : demoChannelUrl}
          style={{ color: "#fff" }}
        >
          {title || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: 14, ml: "8px", color: "GrayText" }}
          />
        </Link>
      </Typography>
    </Card>
  );
};

export default ChannelCard;
