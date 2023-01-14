import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import { useStore } from "../useStore";

const RelatedTovideo = () => {
  const relatedToVideo = useStore(({ relatedToVideo }) => relatedToVideo);

  return (
    <Stack
      gap={3}
      justifyContent={{ xs: "center", md: "start" }}
      direction={{ xs: "row", md: "column" }}
      flexWrap={{ xs: "wrap", md: "nowrap" }}
      mt={{ xs: "50px !important", md: "0 !important" }}
    >
      {relatedToVideo &&
        relatedToVideo.map((item, i) => {
          return (
            <Box key={i}>
              <VideoCard video={item} />
            </Box>
          );
        })}
    </Stack>
  );
};

export default RelatedTovideo;
