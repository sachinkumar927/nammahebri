import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Offcanvas } from "bootstrap";

import {
  Home, MapPin, GraduationCap, Heart, ShoppingBag,
  Wrench, Church, AlertTriangle, Building, Palmtree,
  Briefcase, Leaf, Users, Mail, Phone, Menu
} from "lucide-react";
import "../App.css";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "Villages", path: "/villages", icon: MapPin },
  { label: "Education", path: "/education", icon: GraduationCap },
  { label: "Healthcare", path: "/healthcare", icon: Heart },
  { label: "Daily Needs", path: "/daily-needs", icon: ShoppingBag },
  { label: "Services", path: "/services", icon: Wrench },
  { label: "Temples", path: "/temples", icon: Church },
  { label: "Emergency", path: "/emergency", icon: AlertTriangle },
  { label: "Dept & Offices", path: "/dept-offices", icon: Building },
  { label: "Tourism", path: "/tourism", icon: Palmtree },
  { label: "Business & Jobs", path: "/business-jobs", icon: Briefcase },
  { label: "Agriculture", path: "/agriculture", icon: Leaf },
  { label: "Community", path: "/community", icon: Users },
  { label: "Contact", path: "/contact", icon: Mail },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="sticky-top shadow-sm">
        {/* --- TOP BAR --- */}
        <div className="top-bar text-white py-1 px-3 small d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <MapPin size={12} />
            <span style={{ fontSize: '11px' }}>Hebri Taluk, Udupi District, Karnataka</span>
          </div>
          <div className="d-none d-md-flex gap-3" style={{ fontSize: '11px' }}>
            <span>📞 Emergency: 112</span>
            <span>📧 info@nammahebri.gov.in</span>
          </div>
        </div>

        {/* --- MAIN NAVBAR --- */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid px-lg-4">
            {/* Logo Section */}
            <Link className="navbar-brand d-flex align-items-center me-4" to="/">
              <div
                className="logo rounded-circle text-white d-flex align-items-center justify-content-center me-2 bg-gov-blue"
                style={{ width: "38px", height: "38px", fontSize: "18px" }}
              >
                ನ
              </div>
              <div className="d-flex flex-column lh-1">
                <span className="app-name fw-bold mb-0">Namma Hebri</span>
                <span className="official-text text-muted">Official Taluk Information Portal</span>
              </div>
            </Link>

            {/* Mobile Toggle Button (Opens from Left) */}
            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileSidebar"
              aria-controls="mobileSidebar"
            >
              <Menu size={24} color="var(--gov-blue)" />
            </button>

            {/* Desktop Menu */}
            <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end">
              <ul className="navbar-nav d-flex flex-wrap justify-content-end">
                {navItems.map((item) => (
                  <li className="nav-item" key={item.path}>
                    <Link
                      to={item.path}
                      className={`nav-link d-flex align-items-center gap-1 ${location.pathname === item.path ? "active" : ""
                        }`}
                    >
                      <item.icon size={14} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* --- MOBILE SIDEBAR (OFFCANVAS LEFT) --- */}
      <div
        className="offcanvas offcanvas-start mobile-sidebar"
        tabIndex="-1"
        id="mobileSidebar"
        aria-labelledby="mobileSidebarLabel"
      >
        <div className="offcanvas-header bg-light border-bottom py-3">
          <div className="d-flex align-items-center" id="mobileSidebarLabel">
            <div className="logo rounded-circle text-white d-flex align-items-center justify-content-center me-2 bg-gov-blue" style={{ width: "32px", height: "32px" }}>
              ನ
            </div>
            <span className="fw-bold text-primary mb-0">Namma Hebri</span>
          </div>
          <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body p-0 custom-scrollbar">
          <div className="list-group list-group-flush">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 border-0 ${location.pathname === item.path ? "sidebar-active" : ""}`}
                onClick={() => {
                  const sidebar = document.getElementById("mobileSidebar");
                  const bsOffcanvas = Offcanvas.getInstance(sidebar); if (bsOffcanvas) { bsOffcanvas.hide(); }
                }} >
                <item.icon size={18} className={location.pathname === item.path ? "text-white" : "text-primary"} />
                <span className="sidebar-label">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="offcanvas-footer p-3 bg-light border-top">
          <a href="tel:112" className="btn btn-danger w-100 d-flex align-items-center justify-content-center gap-2 py-2 fw-bold">
            <Phone size={16} /> Emergency: 112
          </a>
          <div className="text-center mt-3">
            <small className="text-muted" style={{ fontSize: '10px' }}>Official Hebri Administration Portal © 2026</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;