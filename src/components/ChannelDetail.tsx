import { Box, Stack, Card, CardMedia, Typography, Grid } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { fetchFromRapidAPI } from '../utils/FetchFromRapidAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChannelDetailInfoType, ChannelDetailVideosType } from './ChannelDetail.types';
import VideoCard from './VideoCard';
import HashLoader from 'react-spinners/HashLoader';



const ChannelDetail = () => {
  const { id } = useParams()
  const [channelInfo, setChannelInfo] = useState<ChannelDetailInfoType>({} as ChannelDetailInfoType);
  const [channelVideos, setChannelVideos] = useState<ChannelDetailVideosType[]>([{} as ChannelDetailVideosType]);

  useEffect(() => {
    fetchFromRapidAPI(`channels?part=snippet,statistics&id=${id}`).then((data) => setChannelInfo(data.items[0]))
    fetchFromRapidAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setChannelVideos(data.items))
  }, [id]);


  if (!channelInfo?.snippet) {
    return (
      <Box height="100vh" width="100vw" bgcolor="black" display="flex" justifyContent="center" alignItems="center">
        <HashLoader
          color="#fc1503" loading size={120} />
      </Box >
    )
  }

  const { statistics: { subscriberCount }, snippet: { title, thumbnails: { medium: { url } } } } = channelInfo

  return (
    <Stack minHeight="100vh" direction="column" bgcolor="black">
      <Box height={{ xs: "200px", sm: "300px" }} width="100%" sx={{ background: "linear-gradient(90deg, rgb(0, 238, 247) 0%, rgb(206, 3, 184) 100%, rgb(0, 212, 255) 100%);" }}></Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Card sx={{
          p: 3,
          width: "340px",
          height: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "none",
          boxShadow: "none",
          backgroundColor: "transparent",
          mt: "-140px"
        }}>
          <CardMedia sx={{ borderRadius: '50%', width: 180 }}
            component="img"
            image={url}
            alt={title} height={180}
          />
          <Typography variant='h6' component="p" mt={2} color="white">
            {title}<CheckCircleIcon sx={{ fontSize: 14, ml: "8px", color: "GrayText" }} />
          </Typography>
          <Typography component="p" color="GrayText">
            {parseInt(subscriberCount).toLocaleString()} Subscribers
          </Typography>
        </Card>
      </Box>
      <Box>
        <Grid container justifyContent="center" spacing={2}>
          {
            channelVideos.map((item, i) => {
              return (
                <Grid key={i} maxWidth={{
                  xs: "320px", sm: "auto"
                }} xs={12} sm={6} lg={4} xl={3} xxl={"auto"} item>
                  <VideoCard video={item} />
                </Grid>
              )
            })
          }
        </Grid>
      </Box>
    </Stack>
  )
}

export default ChannelDetail