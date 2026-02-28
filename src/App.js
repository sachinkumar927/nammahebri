import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TemplesPage from "./pages/TemplesPage";
import TempleDetails from "./pages/TempleDetails";
import ServicesPage from "./pages/ServicesPage";
import VillageDetails from "./pages/VillageDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temples" element={<TemplesPage />} />
        <Route path="/temple/:id" element={<TempleDetails />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/village/:id" element={<VillageDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;