export default App;
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SavedProjects from "./pages/SavedProjects";
import RoomSelection from "./pages/RoomSelection";
import ExportPage from "./pages/ExportPage";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/saved-projects" element={<SavedProjects />} />
        <Route path="/select-room" element={<RoomSelection />} />
        <Route path="/export" element={<ExportPage />} />
        <Route path="/" element={<h1 className="text-xl">Welcome to Virtual Interior Designer</h1>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
