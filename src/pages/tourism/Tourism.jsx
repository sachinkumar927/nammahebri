import {
    Bed,
    MapPin,
    Navigation, Star
} from "lucide-react";
import { useState } from "react";
import "../../App.css";
import { tourismCategories, tourismData } from "../../data/TourismData.jsx";
import "./Style.css";

const Tourism = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredSpots = tourismData.filter(item =>
        activeTab === "All" || item.category === activeTab
    );

    return (
        <div className="bg-light min-vh-100 pb-5">
            {/* 1. HERO INTRODUCTION */}
            <div className="bg-dark text-white position-relative overflow-hidden" style={{ height: '250px' }}>
                <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
                    className="w-100 h-100 object-fit-cover opacity-50 position-absolute" alt="Hebri" />
                <div className="container-fluid position-relative h-100 d-flex flex-column justify-content-center p-4">
                    <h1 className="fw-bold mb-1">Explore Hebri</h1>
                    <p className="small mb-0 opacity-75 max-width-500">
                        The gateway to Agumbe. Discover lush rainforests, ancient temples,
                        and the untamed beauty of the Western Ghats.
                    </p>
                </div>
            </div>

            <div className="container-fluid py-3 px-2 px-lg-4">
                {/* 2. CATEGORY SELECTOR */}
                <div className="d-flex gap-2 overflow-auto hide-scrollbar mb-4 py-1">
                    {tourismCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`btn btn-sm rounded-pill px-3 text-nowrap ${activeTab === cat ? 'bg-app text-white fw-bold shadow-sm' : 'btn-white border bg-white'}`}
                            style={{ fontSize: '12px' }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* 3. KEY ATTRACTIONS GRID (2 Blocks per row on all screens) */}
                <div className="row gx-2 gy-3 mb-5">
                    {filteredSpots.map(spot => (
                        <div key={spot.id} className="col-6 col-md-4 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden tourism-card">
                                <div className="position-relative" style={{ height: '140px' }}>
                                    <img src={spot.image} className="w-100 h-100 object-fit-cover" alt={spot.name} />
                                    {spot.isPopular && (
                                        <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-2" style={{ fontSize: '9px' }}>
                                            ★ TRENDING
                                        </span>
                                    )}
                                </div>
                                <div className="card-body p-2">
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <span className="text-success fw-bold" style={{ fontSize: '9px' }}>{spot.category}</span>
                                        <span className="text-muted" style={{ fontSize: '9px' }}><Star size={9} className="text-warning fill-warning" /> {spot.rating}</span>
                                    </div>
                                    <h6 className="fw-bold text-dark text-truncate mb-1" style={{ fontSize: '13px' }}>{spot.name}</h6>
                                    <div className="text-muted mb-2 text-truncate" style={{ fontSize: '10px' }}>
                                        <MapPin size={10} /> {spot.location}
                                    </div>
                                    <button className="btn btn-outline-success btn-sm w-100 py-1 fw-bold" style={{ fontSize: '10px' }}>
                                        VIEW DETAILS
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. PRACTICAL TRAVEL INFO (The missing pieces) */}
                <div className="row g-3">
                    {/* Accommodation & Food Section */}
                    <div className="col-12 col-md-6">
                        <div className="card border-0 shadow-sm p-3 h-100">
                            <h6 className="fw-bold d-flex align-items-center mb-3">
                                <Bed size={18} className="me-2 text-success" /> Stays & Dining
                            </h6>
                            <div className="small text-muted mb-2">● <strong>Homestays:</strong> Authentic Malnad experience.</div>
                            <div className="small text-muted mb-2">● <strong>Govt Guest Houses:</strong> PWD Bungalow near CHC.</div>
                            <div className="small text-muted">● <strong>Cuisine:</strong> Try Neer Dosa & Pathrode locally.</div>
                        </div>
                    </div>

                    {/* Transportation Section */}
                    <div className="col-12 col-md-6">
                        <div className="card border-0 shadow-sm p-3 h-100 bg-success-subtle">
                            <h6 className="fw-bold d-flex align-items-center mb-3 text-success">
                                <Navigation size={18} className="me-2" /> Travel Guide
                            </h6>
                            <div className="small mb-2"><strong>Best Time:</strong> June to October (Monsoon).</div>
                            <div className="small mb-2"><strong>Transport:</strong> Bus from Udupi (32km) or Agumbe (25km).</div>
                            <div className="small"><strong>Emergency:</strong> Forest Range Office +91 8256XXXXXX</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tourism;