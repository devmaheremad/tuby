import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, SearchFeed } from "./components/index";
import { Channel, Home, Video } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/tuby" element={<Home />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
