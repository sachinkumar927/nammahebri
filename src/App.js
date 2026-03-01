import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Agriculture from "./pages/agriculture/Agriculture";
import Business from "./pages/business/Business";
import Community from "./pages/community/Community";
import DeptOffices from "./pages/deptOffices/DeptOffices";
import Education from "./pages/education/Education";
import Emergency from "./pages/emergency/Emergency";
import Healthcare from "./pages/healthcare/HealthCare";
import Home from "./pages/home/Home";
import Services from "./pages/service/Services";
import Temples from "./pages/temples/Temples";
import Tourism from "./pages/tourism/Tourism";
import Villages from "./pages/village/Village";

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