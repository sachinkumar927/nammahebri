import React, { useState } from "react";
import { jobListings, jobCategories, skillCenters } from "../../data/BusinessData";
import { villages } from "../../data/CommunityData";
import { Search, Briefcase, Users, MapPin, PlusCircle, GraduationCap } from "lucide-react";
import "../../App.css";
import "./Style.css";

const Business = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedVillage, setSelectedVillage] = useState("All Villages");
    const [showForm, setShowForm] = useState(false);

    const filteredJobs = jobListings.filter(job => {
        const matchesTab = activeTab === "All" || job.category === activeTab;
        const matchesSearch = (job.title?.toLowerCase() || "").includes(searchTerm.toLowerCase());
        const matchesVillage = selectedVillage === "All Villages" ||
            (job.village?.trim() === selectedVillage.trim());
        return matchesTab && matchesSearch && matchesVillage;
    });

    return (
        <div className="bg-light min-vh-100 pb-5">
            {/* 1. INTRODUCTION SECTION */}
            <div className="bg-app text-white py-4 shadow-sm border-bottom border-primary border-4">
                <div className="container-fluid px-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 className="fw-bold mb-1" style={{ fontSize: '18px' }}>Business & Employment</h4>
                            <p className="mb-0 opacity-80" style={{ fontSize: '12px', maxWidth: '600px' }}>
                                Connecting local talent with Hebri's growing economy. Browse vacancies or list your business.
                            </p>
                        </div>
                        <button
                            className="btn btn-warning btn-sm fw-bold d-none d-md-block"
                            style={{ fontSize: '12px' }}
                            onClick={() => setShowForm(!showForm)}
                        >
                            <PlusCircle size={14} className="me-1" /> POST A JOB
                        </button>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-3 px-2">

                {/* 6. JOB POSTING FORM (TOGGLE) */}
                {showForm && (
                    <div className="card border-0 shadow-sm mb-4 p-3 bg-white animate__animated animate__fadeIn">
                        <h6 className="fw-bold mb-3" style={{ fontSize: '14px' }}>Submit New Vacancy</h6>
                        <div className="row g-2">
                            <div className="col-6"><input className="form-control form-control-sm" style={{ fontSize: '12px' }} placeholder="Role Title" /></div>
                            <div className="col-3"><input className="form-control form-control-sm" style={{ fontSize: '12px' }} placeholder="Vacancies" /></div>
                            <div className="col-3">
                                <select className="form-select form-select-sm" style={{ fontSize: '12px' }}>
                                    <option>Gents</option><option>Ladies</option><option>All</option>
                                </select>
                            </div>
                            <div className="col-12"><textarea className="form-control form-control-sm" style={{ fontSize: '12px' }} placeholder="Requirements & Contact Info"></textarea></div>
                            <div className="col-12 text-end mt-2">
                                <button className="btn btn-primary btn-sm px-4" style={{ fontSize: '12px' }}>Submit Listing</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* SEARCH & FILTERS */}
                <div className="row g-2 mb-3">
                    <div className="col-7 col-lg-9">
                        <div className="input-group input-group-sm border rounded bg-white">
                            <span className="input-group-text bg-transparent border-0"><Search size={14} /></span>
                            <input
                                type="text"
                                className="form-control border-0 shadow-none"
                                placeholder="Search job titles..."
                                style={{ fontSize: '12px' }}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-5 col-lg-3">
                        <select className="form-select form-select-sm shadow-none" style={{ fontSize: '12px' }} onChange={(e) => setSelectedVillage(e.target.value)}>
                            {villages.map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                    </div>
                </div>

                {/* 3. CATEGORY TABS */}
                <div className="d-flex gap-2 overflow-auto hide-scrollbar mb-4 py-1">
                    {jobCategories.map(cat => (
                        <button key={cat} onClick={() => setActiveTab(cat)}
                            className={`btn btn-sm rounded-pill text-nowrap px-3 ${activeTab === cat ? 'btn-primary shadow' : 'btn-white border bg-white'}`}
                            style={{ fontSize: '12px' }}>{cat}</button>
                    ))}
                </div>

                {/* 2. JOB LISTINGS GRID (GRID 4) */}
                <h6 className="fw-bold mb-3 px-1" style={{ fontSize: '14px' }}>Active Vacancies in {selectedVillage}</h6>
                <div className="row gx-2 gy-2 mb-5">
                    {filteredJobs.map(job => (
                        <div key={job.id} className="col-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden job-card">
                                <div className="card-body p-2 d-flex flex-column">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <span className="badge bg-light text-primary border border-primary px-2" style={{ fontSize: '12px' }}>{job.category}</span>
                                        <span className="text-muted" style={{ fontSize: '12px' }}><Users size={10} /> {job.vacancies} Pos.</span>
                                    </div>
                                    <h6 className="fw-bold text-dark mb-1 text-truncate" style={{ fontSize: '14px' }}>{job.title}</h6>
                                    <p className="text-danger fw-bold mb-1" style={{ fontSize: '12px' }}>{job.gender}</p>
                                    <p className="text-muted mb-2" style={{ fontSize: '12px' }}><MapPin size={10} /> {job.village}</p>

                                    <div className="bg-light p-2 rounded mb-2 flex-grow-1">
                                        <p className="text-secondary mb-0 fw-bold" style={{ fontSize: '12px' }}>Requirements:</p>
                                        <p className="text-secondary mb-0" style={{ fontSize: '12px', lineHeight: '1.2' }}>{job.qual}</p>
                                    </div>

                                    <button className="btn btn-app btn-sm w-100 py-1 fw-bold" style={{ fontSize: '12px' }}>APPLY NOW</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 5. TRAINING & SKILLS (GRID 4) */}
                <div className="mt-5 pt-3 border-top">
                    <h6 className="fw-bold px-1 mb-3" style={{ fontSize: '14px' }}>
                        <GraduationCap size={16} className="me-2 text-primary" /> Training & Skill Development
                    </h6>
                    <div className="row gx-2 gy-2">
                        {skillCenters.map((center, i) => (
                            <div key={i} className="col-6 col-lg-3">
                                <div className="p-2 h-100 rounded-3 bg-white border shadow-sm">
                                    <h6 className="fw-bold mb-1 text-primary" style={{ fontSize: '12px' }}>{center.name}</h6>
                                    <p className="text-secondary mb-1" style={{ fontSize: '12px' }}>{center.focus}</p>
                                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}><MapPin size={10} /> {center.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Business;