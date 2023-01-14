import { Box, Card, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useStore } from "../useStore";

const ChannelInfo = () => {
  const channelInfo = useStore(({ channelInfo }) => channelInfo);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card
        sx={{
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
          mt: "-140px",
        }}
      >
        <CardMedia
          sx={{ borderRadius: "50%", width: 180 }}
          component="img"
          image={channelInfo?.snippet.thumbnails.medium.url}
          alt={channelInfo?.snippet.title}
          height={180}
        />
        <Typography variant="h6" component="p" mt={2} color="white">
          {channelInfo?.snippet.title}
          <CheckCircleIcon
            sx={{ fontSize: 14, ml: "8px", color: "GrayText" }}
          />
        </Typography>
        <Typography component="p" color="GrayText">
          {channelInfo?.statistics.subscriberCount &&
            parseInt(
              channelInfo?.statistics.subscriberCount
            ).toLocaleString()}{" "}
          Subscribers
        </Typography>
      </Card>
    </Box>
  );
};

export default ChannelInfo;
