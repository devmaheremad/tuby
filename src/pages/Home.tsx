import { Stack } from "@mui/material";
import { useEffect } from "react";
import {
  HashLoaderContanier,
  HomeVideos,
  SidebarCopyright,
} from "../components";
import { useStore } from "../useStore";
import { fetchFromRapidAPI } from "../utils/FetchFromRapidAPI";

const Home = () => {
  let screenLoader = useStore(({ screenLoader }) => screenLoader);
  const selectedCategory = useStore(({ selectedCategory }) => selectedCategory);

  useEffect(() => {
    useStore.setState({ screenLoader: true });
    fetchFromRapidAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => {
        useStore.setState({ videos: data.items });
        useStore.setState({ screenLoader: false });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  if (screenLoader) {
    return <HashLoaderContanier />;
  }

  return (
    <Stack
      bgcolor="black"
      direction="column"
      sx={{
        flexDirection: { md: "row" },
      }}
      px={3}
      height="89.9vh"
    >
      <SidebarCopyright />
      <HomeVideos />
    </Stack>
  );
};

export default Home;
