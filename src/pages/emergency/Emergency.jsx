import React, { useState } from "react";
import { emergencyData, emergencyCategories } from "../../data/EmergencyData";
import { Search, Phone, Shield, AlertTriangle, Info } from "lucide-react";
import "../../App.css";
import "./Style.css";

const Emergency = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = emergencyData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.action.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="emergency-page py-4">
      <div className="container">
        {/* Compact Header */}
        <div className="emergency-header mb-4">
          <h2 className="fw-bold mb-1">Emergency Helpline</h2>
          <span className="official-tag">Hebri Taluk Administration - Essential Contacts</span>
        </div>

        {/* Filter Bar */}
        <div className="gov-filter-card p-3 mb-4 shadow-sm">
          <div className="row g-2 align-items-center">
            <div className="col-md-4">
              <div className="search-box">
                <Search size={14} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search service..." 
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-8 d-flex gap-1 overflow-auto py-1">
              {emergencyCategories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="row g-3">
          {filtered.map(item => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div className="emergency-card">
                <div className="card-top">
                  <span className="status-indicator">{item.available}</span>
                  <div className="category-pill">{item.category}</div>
                </div>
                
                <div className="card-mid">
                  <h6 className="contact-name">{item.name}</h6>
                  <p className="official-name">{item.official}</p>
                  
                  <div className="action-info">
                    <Info size={12} className="me-1" />
                    <span>{item.action}</span>
                  </div>
                </div>

                <div className="card-bottom">
                  <a href={`tel:${item.contact}`} className="call-btn main">
                    <Phone size={14} /> {item.contact}
                  </a>
                  {item.altContact && (
                    <a href={`tel:${item.altContact}`} className="call-btn alt">
                      {item.altContact}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Emergency;