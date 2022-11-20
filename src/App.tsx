import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from "./components/index";
import { theme } from "./ownTheme";
import { ThemeProvider } from '@mui/material/styles';

const App = () => (

  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/tuby" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>

)

export default App