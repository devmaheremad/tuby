import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { HashLoaderContanier, Navbar, SearchFeed } from "./components/index";
import { Channel, Home, Video } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<HashLoaderContanier />}>
        <Routes>
          <Route path="/tuby" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
