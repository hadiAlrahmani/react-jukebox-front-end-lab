import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import AddTrack from "./routes/AddTrack";
import EditTrack from "./routes/EditTrack";
import "./public/style.css"

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-track">Add Track</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-track" element={<AddTrack />} />
        <Route path="/edit-track/:id" element={<EditTrack />} />
      </Routes>
    </Router>
  );
};

export default App;

