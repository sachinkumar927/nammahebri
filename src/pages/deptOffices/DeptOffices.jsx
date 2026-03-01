import React, { useState } from "react";
import { departmentData, deptCategories } from "../../data/DeptOfficesData";
import {
    Search, ChevronRight, Phone, Info,
    FileText, Users, Sprout, Vote, GraduationCap, HardHat, Building2, HeartPulse, X
} from "lucide-react";
import "../../App.css";
import "./Style.css";

const IconComponent = ({ name, color, size = 18 }) => {
    const icons = {
        FileText: <FileText size={size} style={{ color }} />,
        Users: <Users size={size} style={{ color }} />,
        Sprout: <Sprout size={size} style={{ color }} />,
        Vote: <Vote size={size} style={{ color }} />,
        GraduationCap: <GraduationCap size={size} style={{ color }} />,
        HardHat: <HardHat size={size} style={{ color }} />,
        Building2: <Building2 size={size} style={{ color }} />,
        HeartPulse: <HeartPulse size={size} style={{ color }} />
    };
    return icons[name] || <Info size={size} />;
};

const DeptOffices = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCat, setSelectedCat] = useState("All");

    const filteredDepts = departmentData.filter(dept => {
        const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            dept.services.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCat = selectedCat === "All" || dept.category === selectedCat;
        return matchesSearch && matchesCat;
    });

    return (
        <div className="bg-light min-vh-100 pb-5">
            {/* OFFICIAL HEADER */}
            <div className="bg-dark text-white py-3 shadow-sm border-bottom border-warning border-4">
                <div className="container-fluid px-3">
                    <h4 className="fw-bold mb-0">Janaseva Portal</h4>
                    <p className="small text-warning mb-0 fw-bold" style={{ fontSize: '10px' }}>
                        DEPARTMENTS & CITIZEN SERVICES • HEBRI TALUK
                    </p>
                </div>
            </div>

            <div className="container-fluid py-3 px-2">
                {/* SEARCH & FILTER */}
                <div className="card border-0 shadow-sm mb-3 rounded-3">
                    <div className="card-body p-2">
                        <div className="input-group input-group-sm mb-2 border rounded">
                            <span className="input-group-text bg-white border-0"><Search size={14} /></span>
                            <input
                                type="text"
                                className="form-control border-0 shadow-none"
                                placeholder="Search RTC, Pension, Voter ID..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="d-flex gap-1 overflow-auto hide-scrollbar">
                            {deptCategories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCat(cat)}
                                    className={`btn btn-sm rounded-pill text-nowrap px-3 ${selectedCat === cat ? 'bg-app text-white' : 'btn-white border bg-white'}`}
                                    style={{ fontSize: '12px' }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2-COLUMN GRID */}
                <div className="row gx-2 gy-2">
                    {filteredDepts.map(dept => (
                        <div key={dept.id} className="col-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                                <div className="card-body p-2 d-flex flex-column">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="p-2 rounded-2 me-2" style={{ backgroundColor: `${dept.color}15` }}>
                                            <IconComponent name={dept.icon} color={dept.color} />
                                        </div>
                                        <div className="overflow-hidden">
                                            <h6 className="fw-bold mb-0 text-dark text-truncate" style={{ fontSize: '14px' }}>{dept.name}</h6>
                                            <span className="text-muted d-block text-truncate" style={{ fontSize: '12px' }}>{dept.head}</span>
                                        </div>
                                    </div>

                                    {/* Services List (Dotted style) */}
                                    <div className="mb-2 flex-grow-1">
                                        {dept.services.map((s, i) => (
                                            <div key={i} className="text-secondary border-bottom border-light py-1" style={{ fontSize: '12px', borderStyle: 'dotted' }}>
                                                <ChevronRight size={8} className="me-1 text-app" /> {s}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="d-flex gap-1 mt-2">
                                        <a href={`tel:${dept.emergency}`} className="btn btn-outline-secondary btn-sm flex-fill p-1" style={{ fontSize: '12px' }}>
                                            <Phone size={10} /> CALL
                                        </a>
                                        <button className="btn text-white bg-app btn-sm flex-fill p-1 fw-bold" style={{ fontSize: '12px' }}>
                                            APPLY
                                        </button>
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

export default DeptOffices;