import React, { useState } from "react";
import { templesData, templeCategories } from "../../data/TemplesData";
import { villages } from "../../data/HealthCareData";
import { Search, MapPin, Clock, Info, Navigation, Phone } from "lucide-react";
import "../../App.css";
import "./Style.css";

const Temples = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedVillage, setSelectedVillage] = useState("All Villages");

    const filteredTemples = templesData.filter((t) => {
        const matchesSearch =
            (t.templeName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                t.deityName?.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === "All" || t.category === selectedCategory;
        const matchesVillage = selectedVillage === "All Villages" || t.village === selectedVillage;
        return matchesSearch && matchesCategory && matchesVillage;
    });

    return (
        <div className="bg-stone-50 min-vh-100 py-4">
            <div className="container">
                {/* Header - Scaled down for official look */}
                <div className="text-center mb-4">
                    <h2 className="fw-bold mb-1" style={{ color: 'var(--gov-blue-dark)', fontSize: '24px' }}>Spiritual Heritage</h2>
                    <p className="text-muted mb-2" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
                        OFFICIAL DIRECTORY OF ANCIENT TEMPLES AND SACRED SITES
                    </p>
                    <div className="mx-auto bg-gold h-1" style={{ width: '60px', height: '3px', backgroundColor: 'var(--gov-gold)' }}></div>
                </div>

                {/* --- COMPACT FILTER BAR --- */}
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '8px' }}>
                    <div className="card-body p-3 bg-white">
                        <div className="row g-2 align-items-center">
                            <div className="col-md-4">
                                <div className="input-group border rounded px-2 py-1 bg-light">
                                    <Search className="text-muted mt-1" size={14} />
                                    <input
                                        type="text"
                                        className="form-control border-0 bg-transparent shadow-none"
                                        style={{ fontSize: '13px' }}
                                        placeholder="Search Temple or Deity..."
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <select
                                    className="form-select border rounded px-2 py-2 bg-light shadow-none"
                                    style={{ fontSize: '13px' }}
                                    onChange={(e) => setSelectedVillage(e.target.value)}
                                >
                                    {villages.map(v => <option key={v} value={v}>{v}</option>)}
                                </select>
                            </div>
                            <div className="col-md-5 d-flex gap-1 overflow-auto pb-1">
                                {templeCategories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`btn btn-sm rounded text-nowrap px-3 ${selectedCategory === cat ? 'btn-gov-active' : 'btn-outline-secondary'}`}
                                        style={{ fontSize: '11px', fontWeight: '600' }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- TEMPLE CARDS --- */}
                <div className="row g-3">
                    {filteredTemples.map((temple) => (
                        <div key={temple.id} className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 shadow-sm gov-card overflow-hidden">
                                <div className="position-relative">
                                    <img src={temple.imageUrl} className="card-img-top" style={{ height: "160px", objectFit: "cover" }} alt={temple.templeName} />
                                    <div className="position-absolute top-0 end-0 m-2">
                                        <span className="badge bg-dark-blue text-white px-2 py-1" style={{ fontSize: '9px', backgroundColor: 'var(--gov-blue-dark)' }}>
                                            {temple.category || "Temple"}
                                        </span>
                                    </div>
                                </div>

                                <div className="card-body p-3">
                                    <div className="mb-2" style={{ minHeight: '18px' }}>
                                        {temple.badges?.map((badge, idx) => (
                                            <span key={idx} className="badge-gov-gold me-1">
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                    <h6 className="fw-bold mb-1 text-gov-blue" style={{ fontSize: '15px' }}>{temple.templeName}</h6>
                                    <p className="fw-bold mb-2" style={{ fontSize: '11px', color: 'var(--gov-red)' }}>{temple.deityName}</p>

                                    <p className="text-muted mb-3" style={{ fontSize: '11px', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {temple.history}
                                    </p>

                                    <div className="d-grid gap-1 mb-3">
                                        <div className="d-flex align-items-start text-dark" style={{ fontSize: '11px' }}>
                                            <Clock size={12} className="me-2 text-primary mt-1" />
                                            <span>{temple.poojaTimings}</span>
                                        </div>
                                        {temple.contactNumber && (
                                            <div className="d-flex align-items-center text-dark" style={{ fontSize: '11px' }}>
                                                <Phone size={12} className="me-2 text-primary" />
                                                <span>{temple.contactNumber}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-2 border-top d-flex justify-content-between align-items-center">
                                        <div className="text-muted" style={{ fontSize: '10px', fontWeight: '600' }}>
                                            <MapPin size={10} className="me-1 text-danger" /> {temple.village}
                                        </div>
                                        <a
                                            href={`https://www.google.com/maps?q=${temple.latitude},${temple.longitude}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-sm btn-gov-outline"
                                            style={{ fontSize: '10px', padding: '2px 8px' }}
                                        >
                                            <Navigation size={10} className="me-1" /> ROUTE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Temples;