import {
    AlertCircle,
    Droplet,
    Heart,
    Map as MapIcon,
    MapPin,
    Microscope,
    Phone,
    Pill,
    Search,
    X
} from "lucide-react";
import { useState } from "react";
import "../../App.css";
import { healthcareData, healthCategories, villages } from "../../data/HealthCareData.jsx";
import "./Style.css";

const Healthcare = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedVillage, setSelectedVillage] = useState("All Villages");

    const filteredData = healthcareData.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.specialty.join(", ").toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const matchesVillage = selectedVillage === "All Villages" || item.village === selectedVillage;
        return matchesSearch && matchesCategory && matchesVillage;
    });

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedCategory("All");
        setSelectedVillage("All Villages");
    };

    return (
        <div className="bg-light min-vh-100">
            {/* 1. EMERGENCY TOP BAR */}
            <div className="bg-app text-white py-2 px-3 shadow-sm sticky-top" style={{ zIndex: 1020 }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <span className="small fw-bold d-none d-md-inline">
                        <AlertCircle size={14} className="me-2 mb-1" />
                        HEBRI MEDICAL EMERGENCY HELPLINE
                    </span>
                    <div className="d-flex gap-2">
                        <a href="tel:108" className="btn btn-light btn-sm fw-bold text-danger px-3 rounded-pill" style={{ fontSize: '12px' }}>
                            🚑 CALL 108
                        </a>
                        <a href="tel:08256232200" className="btn btn-outline-light btn-sm fw-bold px-3 rounded-pill" style={{ fontSize: '12px' }}>
                            🏥 CHC HEBRI
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-3">
                {/* 2. PAGE HEADER */}
                <div className="mb-3 px-lg-3">
                    <h2 className="fw-bold text-dark mb-0" style={{ fontSize: '20px' }}>Health & Medical Services</h2>
                    <p className="text-muted" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Verified Healthcare Directory for Hebri Taluk
                    </p>
                </div>

                <div className="px-lg-3">
                    {/* --- SINGLE ROW FILTER BAR --- */}
                    <div className="card border-0 shadow-sm mb-3" style={{ borderRadius: '6px' }}>
                        <div className="card-body p-2">
                            <div className="row g-2 align-items-center">
                                <div className="col-md-3">
                                    <div className="input-group input-group-sm border rounded">
                                        <span className="input-group-text bg-white border-0"><Search size={14} className="text-muted" /></span>
                                        <input
                                            type="text"
                                            className="form-control border-0 shadow-none"
                                            style={{ fontSize: '12px' }}
                                            placeholder="Search Doctors, Clinics, Labs..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="input-group input-group-sm border rounded">
                                        <span className="input-group-text bg-white border-0"><MapPin size={14} className="text-muted" /></span>
                                        <select
                                            className="form-select border-0 shadow-none"
                                            style={{ fontSize: '12px', cursor: 'pointer' }}
                                            value={selectedVillage}
                                            onChange={(e) => setSelectedVillage(e.target.value)}
                                        >
                                            {villages.map(v => <option key={v} value={v}>{v}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-7">
                                    <div className="d-flex align-items-center overflow-auto hide-scrollbar">
                                        <span className="fw-bold text-muted me-2 text-nowrap" style={{ fontSize: '10px' }}>CATEGORIES:</span>
                                        <div className="d-flex gap-1 pb-1">
                                            {healthCategories.map((cat) => (
                                                <button
                                                    key={cat}
                                                    onClick={() => setSelectedCategory(cat)}
                                                    className={`btn btn-sm rounded text-nowrap px-2 py-1 ${selectedCategory === cat ? "bg-app text-white fw-bold shadow-sm" : "bg-white text-dark border hover-bg-gray"}`}
                                                    style={{ fontSize: '11px' }}
                                                >
                                                    {cat === "Blood Bank" && <Droplet size={11} className="me-1" />}
                                                    {cat === "Laboratory" && <Microscope size={11} className="me-1" />}
                                                    {cat === "Pharmacy" && <Pill size={11} className="me-1" />}
                                                    {cat}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Counter */}
                    <div className="d-flex justify-content-between align-items-center mb-2 px-1">
                        <div className="text-muted fw-bold" style={{ fontSize: '10px' }}>
                            FOUND <span className="text-danger">{filteredData.length}</span> FACILITIES
                        </div>
                        {(searchTerm || selectedCategory !== "All" || selectedVillage !== "All Villages") && (
                            <button onClick={clearFilters} className="btn btn-link btn-sm text-danger text-decoration-none p-0 fw-bold" style={{ fontSize: '10px' }}>
                                <X size={12} className="me-1" />RESET FILTERS
                            </button>
                        )}
                    </div>

                    {/* 3. GRID VIEW (2 per row on Desktop) */}
                    <div className="row g-3">
                        {filteredData.length === 0 ? (
                            <div className="col-12 text-center py-5 bg-white rounded border mt-2">
                                <Heart size={40} className="text-muted mb-2 opacity-50" />
                                <h6 className="fw-bold text-muted">No healthcare providers found</h6>
                                <button className="btn btn-outline-danger mt-2 btn-sm px-4" onClick={clearFilters}>Reset All</button>
                            </div>
                        ) : (
                            filteredData.map((item) => (
                                <div key={item.id} className="col-12 col-md-6">
                                    <div className="card h-100 border shadow-sm rounded-3 overflow-hidden gov-health-card">
                                        <div className="row g-0 h-100">
                                            <div className="col-4">
                                                <div className="h-100 position-relative">
                                                    <img src={item.image} className="w-100 h-100 object-fit-cover" alt={item.name} />
                                                    {item.isEmergency && (
                                                        <div className="position-absolute top-0 start-0 m-1">
                                                            <span className="badge bg-danger p-1" style={{ fontSize: '8px' }}>24/7</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body p-2 p-md-3 d-flex flex-column h-100">
                                                    <div className="d-flex justify-content-between align-items-start mb-1">
                                                        <span className={`badge ${item.type === 'Government' ? 'bg-success' : 'bg-primary'}`} style={{ fontSize: '8px' }}>
                                                            {item.type.toUpperCase()}
                                                        </span>
                                                        <div className="text-success fw-bold d-flex align-items-center" style={{ fontSize: '9px' }}>
                                                            <span className="pulse-dot me-1"></span> OPEN
                                                        </div>
                                                    </div>

                                                    <h5 className="fw-bold mb-1 text-dark text-truncate" style={{ fontSize: '14px' }}>{item.name}</h5>

                                                    <div className="d-flex align-items-center text-muted mb-2" style={{ fontSize: '11px' }}>
                                                        <MapPin size={10} className="me-1 text-danger" />
                                                        <span className="text-truncate">{item.location}</span>
                                                    </div>

                                                    <div className="d-flex flex-wrap gap-1 mb-2">
                                                        {item.specialty.slice(0, 2).map((s, i) => (
                                                            <span key={i} className="badge bg-light text-secondary border fw-normal" style={{ fontSize: '9px' }}>{s}</span>
                                                        ))}
                                                    </div>

                                                    <div className="mt-auto pt-2 border-top d-flex gap-2">
                                                        <a href={`tel:${item.contact}`} className="btn btn-danger btn-sm flex-fill d-flex align-items-center justify-content-center fw-bold" style={{ fontSize: '10px' }}>
                                                            <Phone size={12} className="me-1" /> CALL
                                                        </a>
                                                        <button className="btn btn-outline-secondary btn-sm flex-fill d-flex align-items-center justify-content-center fw-bold" style={{ fontSize: '10px' }}>
                                                            <MapIcon size={12} className="me-1" /> MAP
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Healthcare;