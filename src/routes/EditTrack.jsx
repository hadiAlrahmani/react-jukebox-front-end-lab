import { useParams } from "react-router-dom";
import TrackForm from "../components/TrackForm";

const EditTrack = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Track</h1>
      <TrackForm trackId={id} />
    </div>
  );
};

export default EditTrack;
