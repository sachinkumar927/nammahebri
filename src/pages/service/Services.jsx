import React, { useState } from "react";
import { serviceListings, serviceCategories } from "../../data/ServiceData";
import { villages } from "../../data/CommunityData";
import { Search, Phone, MapPin, Tool, Truck, Wrench, Hammer } from "lucide-react";
import "../../App.css";
import "./Style.css";

const Services = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedVillage, setSelectedVillage] = useState("All Villages");

    const filteredServices = serviceListings.filter(service => {
        const matchesTab = activeTab === "All" || service.category === activeTab;
        const matchesSearch = (service.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
            (service.type?.toLowerCase() || "").includes(searchTerm.toLowerCase());
        const matchesVillage = selectedVillage === "All Villages" ||
            (service.village?.trim() === selectedVillage.trim());
        return matchesTab && matchesSearch && matchesVillage;
    });

    return (
        <div className="bg-light min-vh-100 pb-5">
            {/* 1. INTRODUCTION SECTION */}
            <div className="bg-app text-white py-4 shadow-sm border-bottom border-info border-4">
                <div className="container-fluid px-3">
                    <h4 className="fw-bold mb-1" style={{ fontSize: '18px' }}>Local Services Directory</h4>
                    <p className="mb-0 opacity-80" style={{ fontSize: '12px', maxWidth: '600px' }}>
                        Find local services in Hebri Taluk — from transport to repairs, all in one place.
                    </p>
                </div>
            </div>

            <div className="container-fluid py-3 px-2">

                {/* SEARCH & VILLAGE FILTER ROW */}
                <div className="row g-2 mb-3">
                    <div className="col-7 col-lg-9">
                        <div className="input-group input-group-sm border rounded bg-white shadow-sm">
                            <span className="input-group-text bg-transparent border-0"><Search size={14} /></span>
                            <input
                                type="text"
                                className="form-control border-0 shadow-none"
                                placeholder="Search services (e.g. Electrician)..."
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

                {/* 2. CATEGORY TABS */}
                <div className="d-flex gap-2 overflow-auto hide-scrollbar mb-4 py-1">
                    {serviceCategories.map(cat => (
                        <button key={cat} onClick={() => setActiveTab(cat)}
                            className={`btn btn-sm rounded-pill text-nowrap px-3 ${activeTab === cat ? 'bg-app text-white shadow' : 'btn-white border bg-white'}`}
                            style={{ fontSize: '12px' }}>{cat}</button>
                    ))}
                </div>

                {/* 3. MAIN SERVICE GRID (GRID 4) */}
                <h6 className="fw-bold mb-3 px-1" style={{ fontSize: '14px' }}>Available Providers</h6>
                <div className="row gx-2 gy-2">
                    {filteredServices.length > 0 ? filteredServices.map(item => (
                        <div key={item.id} className="col-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden service-card">
                                <div className="position-relative">
                                    <img src={item.image} className="w-100 object-fit-cover" style={{ height: '100px' }} alt={item.name} />
                                    <span className="badge bg-dark opacity-75 position-absolute top-0 start-0 m-2" style={{ fontSize: '9px' }}>{item.type}</span>
                                </div>
                                <div className="card-body p-2 d-flex flex-column">
                                    <h6 className="fw-bold text-dark mb-1 text-truncate" style={{ fontSize: '14px' }}>{item.name}</h6>
                                    <p className="text-muted mb-2" style={{ fontSize: '10px' }}>
                                        <MapPin size={10} className="text-danger" /> {item.village}
                                    </p>
                                    <p className="text-secondary mb-3 flex-grow-1" style={{ fontSize: '12px', lineHeight: '1.3' }}>
                                        {item.desc}
                                    </p>
                                    <a href={`tel:${item.contact}`} className="btn btn-app btn-sm w-100 py-1 fw-bold" style={{ fontSize: '12px' }}>
                                        <Phone size={12} className="me-1" /> CALL PROVIDER
                                    </a>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="col-12 text-center py-5 text-muted" style={{ fontSize: '12px' }}>
                            No service providers found in {selectedVillage} for this category.
                        </div>
                    )}
                </div>

                {/* EMERGENCY QUICK LINKS */}
                <div className="mt-5 pt-3 border-top">
                    <h6 className="fw-bold px-1 mb-3" style={{ fontSize: '14px' }}>Quick Support</h6>
                    <div className="row g-2">
                        <div className="col-4">
                            <div className="text-center p-2 rounded bg-white shadow-sm border-bottom border-danger border-2">
                                <Truck size={20} className="text-danger mb-1" />
                                <div className="fw-bold" style={{ fontSize: '12px' }}>Ambulance</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="text-center p-2 rounded bg-white shadow-sm border-bottom border-warning border-2">
                                <Wrench size={20} className="text-warning mb-1" />
                                <div className="fw-bold" style={{ fontSize: '12px' }}>Roadside</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="text-center p-2 rounded bg-white shadow-sm border-bottom border-primary border-2">
                                <Hammer size={20} className="text-primary mb-1" />
                                <div className="fw-bold" style={{ fontSize: '12px' }}>Handyman</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;