import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Villages from "./pages/village/Village";
import NotFound from "./components/NotFound";
import "./App.css";
import Education from "./pages/education/Education";
import Healthcare from "./pages/healthcare/HealthCare";
import Temples from "./pages/temples/Temples";
import Emergency from "./pages/emergency/Emergency";
import Tourism from "./pages/tourism/Tourism";
import DeptOffices from "./pages/deptOffices/DeptOffices";
import Community from "./pages/community/Community";
import Agriculture from "./pages/agriculture/Agriculture";
import Business from "./pages/business/Business";
import Services from "./pages/service/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/villages/" element={<Villages />} />
        <Route path="/education" element={<Education />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/temples" element={<Temples />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/dept-offices" element={<DeptOffices />} />
        <Route path="/community" element={<Community />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/business-jobs" element={<Business />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;