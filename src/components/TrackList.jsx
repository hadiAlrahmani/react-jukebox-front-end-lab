import { useState, useEffect } from "react";
import { getTracks, deleteTrack } from "../services/trackService";
import { Link } from "react-router-dom";

const TrackList = ({ onPlay }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const data = await getTracks();
        setTracks(data);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchTracks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTrack(id);
      setTracks(tracks.filter((track) => track._id !== id));
    } catch (error) {
      console.error("Error deleting track:", error);
    }
  };

  return (
    <div className="track-list-container">
      <h2>Track List</h2>
      <div className="track-list">
        {tracks.length === 0 ? (
          <p>No tracks available.</p>
        ) : (
          tracks.map((track) => (
            <div className="track-card" key={track._id}>
              <p>
                <strong>{track.title}</strong> by <span className="artist">{track.artist}</span>
              </p>
              <div className="button-group">
                <button onClick={() => onPlay(track)}>Play</button>
                <Link to={`/edit-track/${track._id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(track._id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TrackList;
