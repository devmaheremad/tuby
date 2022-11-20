import { Stack, Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'
import { Sidebar, Videos } from '.'
import { fetchFromRapidAPI } from '../utils/FetchFromRapidAPI'
import { VideosType } from './Feed.types'

const Feed = () => {
  const [screenLoader, setScreenLoader] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Coding')
  const [videos, setVideos] = useState<VideosType[]>([]);
  useEffect(() => {
    setScreenLoader(true)
    fetchFromRapidAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items)
      setScreenLoader(false)
    });
  }, [selectedCategory]);
  return (

    screenLoader ?
      <Box height="100vh" width="100vw" bgcolor="black" display="flex" justifyContent="center" alignItems="center">
        <HashLoader
          color="#fc1503" loading size={120} />
      </Box > :
      <Stack bgcolor="black" direction="column" sx={{
        flexDirection: { md: 'row' }
      }} px={3} height="89.9vh">
        <Box borderRight={{ md: '1px solid #3d3d3d' }} pr={{ xs: 1, sm: 2, lg: 3 }}>
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <Typography m={{ xs: "10px 0", md: " 16px 0 0 0" }} variant="subtitle2" color="white">Copyright © 2022 by Maher</Typography>
        </Box>
        <Box overflow={{
          xs: "auto",
          sm: "100%"
        }}>
          <Typography variant="h4" color="primary" fontWeight="700" mt={2} ml={{ md: 3 }}>
            <Typography component="span" variant="h4" color="white" fontWeight="700">{selectedCategory} </Typography>
            videos
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack >
  )
}

export default Feed