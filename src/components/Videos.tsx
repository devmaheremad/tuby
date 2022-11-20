import { ChannelCard, VideoCard } from "."
import { Grid, Box } from '@mui/material'
import { VideosProps } from "./VideosProps.types"

const Videos = ({ videos }: VideosProps) => {
  return (
    <Box ml={{ md: 3 }}>
      <Grid container spacing={2} mt={2} justifyContent="center">
        {videos.map((item, index) => (
          <Grid key={index} maxWidth={{
            xs: "320px", sm: "auto"
          }} xs={12} sm={6} lg={4} xl={3} xxl={"auto"} item>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetails={item} />}
          </Grid >
        )
        )}
      </Grid>
    </Box>
  )
}

export default Videos