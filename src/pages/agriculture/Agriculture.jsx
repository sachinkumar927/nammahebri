import React, { useState } from "react";
import { agriData, agriCategories, agriStats } from "../../data/AgricultureData.jsx";
import { villages } from "../../data/CommunityData.jsx"; // Reuse the village list
import { Search, Sprout, Droplets, Tractor, ShoppingCart, ShieldCheck, MapPin } from "lucide-react";
import "../../App.css";
import "./Style.css";

const Agriculture = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedVillage, setSelectedVillage] = useState("All Villages");

    // NULL-SAFE FILTER LOGIC
    const filteredAgri = agriData.filter(item => {
        const matchesTab = activeTab === "All" || item.category === activeTab;
        const matchesSearch = (item.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
            (item.desc?.toLowerCase() || "").includes(searchTerm.toLowerCase());

        // Checks "All Villages" OR matches specific village, also handles "All Villages" assigned to global schemes
        const itemVillage = item.village?.trim() || "";
        const matchesVillage = selectedVillage === "All Villages" ||
            itemVillage === selectedVillage.trim() ||
            itemVillage === "All Villages";

        return matchesTab && matchesSearch && matchesVillage;
    });

    return (
        <div className="bg-light min-vh-100 pb-5">
            {/* 1. INTRODUCTION SECTION */}
            <div className="bg-app text-white py-4 shadow-sm border-bottom border-success border-4">
                <div className="container-fluid px-3">
                    <div className="d-flex align-items-center gap-2 mb-1">
                        <Sprout className="text-warning" size={24} />
                        <h4 className="fw-bold mb-0" style={{ fontSize: '18px' }}>Agriculture Hub</h4>
                    </div>
                    <p className="mb-0 opacity-80" style={{ fontSize: '12px', maxWidth: '700px' }}>
                        Farming is the backbone of Hebri. We provide details on modern machinery,
                        government subsidies, and irrigation resources to empower our farmers.
                    </p>
                </div>
            </div>

            <div className="container-fluid py-3 px-2">
                {/* STATS STRIP */}
                <div className="row g-2 mb-4">
                    {agriStats.map((stat, i) => (
                        <div key={i} className="col-4">
                            <div className="bg-white p-2 rounded shadow-sm text-center border-top border-success border-2">
                                <div className="text-muted mb-0" style={{ fontSize: '12px' }}>{stat.label}</div>
                                <div className="fw-bold text-dark" style={{ fontSize: '12px' }}>{stat.value}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SEARCH & VILLAGE FILTER */}
                <div className="row g-2 mb-3">
                    <div className="col-7 col-lg-9">
                        <div className="input-group input-group-sm border rounded bg-white shadow-sm">
                            <span className="input-group-text bg-transparent border-0"><Search size={14} /></span>
                            <input
                                type="text"
                                className="form-control border-0 shadow-none"
                                placeholder="Search tools, schemes..."
                                style={{ fontSize: '12px' }}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-5 col-lg-3">
                        <select
                            className="form-select form-select-sm border rounded shadow-sm"
                            style={{ fontSize: '12px' }}
                            value={selectedVillage}
                            onChange={(e) => setSelectedVillage(e.target.value)}
                        >
                            {villages.map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                    </div>
                </div>

                {/* CATEGORY TABS */}
                <div className="d-flex gap-2 overflow-auto hide-scrollbar mb-4 py-1">
                    {agriCategories.map(cat => (
                        <button key={cat} onClick={() => setActiveTab(cat)}
                            className={`btn btn-sm rounded-pill text-nowrap px-3 ${activeTab === cat ? 'btn-success shadow' : 'btn-white border bg-white'}`}
                            style={{ fontSize: '12px' }}>{cat}</button>
                    ))}
                </div>

                {/* 2 & 7. MACHINERY & TECH GRID (GRID 4) */}
                <h6 className="fw-bold mb-3 px-1" style={{ fontSize: '14px' }}>Agriculture Services & Equipment</h6>
                <div className="row gx-2 gy-2">
                    {filteredAgri.length > 0 ? filteredAgri.map(item => (
                        <div key={item.id} className="col-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                                <div className="position-relative">
                                    <img src={item.image} className="w-100 object-fit-cover" style={{ height: '110px' }} alt={item.name} />
                                    <span className="badge bg-success position-absolute top-0 start-0 m-2" style={{ fontSize: '9px' }}>{item.type}</span>
                                </div>
                                <div className="card-body p-2 d-flex flex-column">
                                    <h6 className="fw-bold text-dark mb-1 text-truncate" style={{ fontSize: '14px' }}>{item.name}</h6>
                                    <p className="text-muted mb-1" style={{ fontSize: '12px' }}>
                                        <MapPin size={10} className="text-danger" /> {item.village}
                                    </p>
                                    <p className="text-secondary mb-2 flex-grow-1" style={{ fontSize: '12px', lineHeight: '1.3' }}>{item.desc}</p>
                                    <div className="d-flex justify-content-between align-items-center mt-auto">
                                        <span className="text-primary fw-bold" style={{ fontSize: '12px' }}>{item.price || item.status || "Check Info"}</span>
                                        <button className="btn btn-sm btn-outline-success py-0 px-2" style={{ fontSize: '12px' }}>Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="col-12 text-center py-5 text-muted" style={{ fontSize: '12px' }}>
                            No agricultural services found for this village/category.
                        </div>
                    )}
                </div>

                {/* 6. IRRIGATION & 8. WELFARE QUICK LINKS */}
                <div className="mt-5 border-top pt-4">
                    <div className="row g-2">
                        <div className="col-6 col-lg-3">
                            <div className="p-3 rounded-3 bg-white shadow-sm text-center">
                                <Droplets className="text-primary mb-2" size={20} />
                                <h6 className="fw-bold mb-1" style={{ fontSize: '12px' }}>Water Resources</h6>
                                <p className="text-muted mb-0" style={{ fontSize: '12px' }}>River & Canal Maps</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="p-3 rounded-3 bg-white shadow-sm text-center">
                                <ShieldCheck className="text-warning mb-2" size={20} />
                                <h6 className="fw-bold mb-1" style={{ fontSize: '12px' }}>Farmer Welfare</h6>
                                <p className="text-muted mb-0" style={{ fontSize: '12px' }}>Pension & Health</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agriculture;