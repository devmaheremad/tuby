import VideoCard from "./VideoCard";
import { Grid } from "@mui/material";
import { useStore } from "../useStore";

const ChannelVideos = () => {
  const channelVideos = useStore(({ channelVideos }) => channelVideos);

  return (
    <Grid container justifyContent="center" spacing={2}>
      {channelVideos &&
        channelVideos.map((item, i) => {
          return (
            <Grid
              key={i}
              maxWidth={{
                xs: "320px",
                sm: "auto",
              }}
              xs={12}
              sm={6}
              lg={4}
              xl={3}
              xxl={"auto"}
              item
            >
              <VideoCard video={item} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default ChannelVideos;
