import { Stack } from "@mui/material";
import { fetchFromRapidAPI } from "../utils/FetchFromRapidAPI";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ChannelBg,
  ChannelInfo,
  ChannelVideos,
  HashLoaderContanier,
} from "../components";
import { useStore } from "../useStore";

const ChannelDetail = () => {
  const { id } = useParams();

  const channelInfo = useStore(({ channelInfo }) => channelInfo);

  useEffect(() => {
    fetchFromRapidAPI(`channels?part=snippet,statistics&id=${id}`).then(
      (data) => useStore.setState({ channelInfo: data.items[0] })
    );
    fetchFromRapidAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => useStore.setState({ channelVideos: data.items })
    );
  }, [id]);

  if (!channelInfo?.snippet.thumbnails.medium.url) {
    return <HashLoaderContanier />;
  }

  return (
    <Stack minHeight="100vh" direction="column" bgcolor="black">
      <ChannelBg />
      <ChannelInfo />
      <ChannelVideos />
    </Stack>
  );
};

export default ChannelDetail;
