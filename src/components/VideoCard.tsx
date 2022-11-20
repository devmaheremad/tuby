import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { VideoCardProps } from './VideoCard.types'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants';

export default function VideoCard({ video }: VideoCardProps) {

  if (!video?.id) {
    return <p>"Loading..."</p>
  }

  const { id: { videoId }, snippet: { channelId, channelTitle, title, thumbnails: { medium: { url } } } } = video

  return (
    <Card sx={{
      height: "350px",
      maxWidth: "320px",
      margin: "auto",
      bgcolor: "#1e1e1e", width: {
        xxl: "320px"
      },
    }}>
      <Link to={(videoId) ? `/video/${(videoId)}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={url || demoThumbnailUrl}
          alt={title || demoVideoTitle}
          sx={{
            width: "320px", height: "180px"
          }}
        />
      </Link>
      <CardContent>
        <Typography variant='h6' component="p" sx={{ lineHeight: "23px" }}>
          <Link to={(videoId) ? `/video/${(videoId)}` : demoVideoUrl} style={{ color: "#fff" }}>{title || demoVideoTitle}</Link>
        </Typography>
        <Typography variant="subtitle2" component="p" mt={2}>
          <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl} style={{ color: "GrayText" }}>
            {channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: 14, ml: "8px" }} />
          </Link>
        </Typography>
      </CardContent>
    </Card>
  )
}