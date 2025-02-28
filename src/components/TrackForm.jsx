import { useState, useEffect } from "react";
import { addTrack, updateTrack, getTracks } from "../services/trackService";
import { useNavigate } from "react-router-dom";

const TrackForm = ({ trackId }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (trackId) {
      const fetchTrack = async () => {
        const tracks = await getTracks();
        const trackToEdit = tracks.find((track) => track._id === trackId);
        if (trackToEdit) {
          setTitle(trackToEdit.title);
          setArtist(trackToEdit.artist);
        }
      };
      fetchTrack();
    }
  }, [trackId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trackData = { title, artist };

    try {
      if (trackId) {
        await updateTrack(trackId, trackData);
      } else {
        await addTrack(trackData);
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving track:", error);
    }
  };

  return (
    <div className="container">
      <h2>{trackId ? "Edit Track" : "Add a New Track"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Artist:</label>
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} required />
        <button type="submit">{trackId ? "Update Track" : "Add Track"}</button>
      </form>
    </div>
  );
};

export default TrackForm;
