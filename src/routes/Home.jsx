import { useState } from "react";
import TrackList from "../components/TrackList";
import NowPlaying from "../components/NowPlaying";

const Home = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <div className="container">
      <h1>Track Library</h1>
      <TrackList onPlay={setCurrentTrack} />
      <NowPlaying track={currentTrack} />
    </div>
  );
};

export default Home;
