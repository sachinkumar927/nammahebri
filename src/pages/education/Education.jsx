import { GraduationCap, MapPin, Phone, Search, X } from "lucide-react";
import { useState } from "react";
import "../../App.css";
import { categories, educationData, villages } from "../../data/EducationData.jsx";
import "./Style.css";

const Education = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedVillage, setSelectedVillage] = useState("All Villages");

    const filteredData = educationData.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.courses.join(", ").toLowerCase().includes(searchTerm.toLowerCase());
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
        <div className="container-fluid py-3 bg-light min-vh-100">
            {/* Page Header */}
            <div className="mb-3 px-lg-3">
                <h2 className="fw-bold text-app mb-0" style={{ fontSize: '20px' }}>Education & Training</h2>
                <p className="text-muted" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Hebri Taluk Educational Directory
                </p>
            </div>

            <div className="px-lg-3">
                {/* --- SINGLE ROW HORIZONTAL FILTER BAR --- */}
                <div className="card border-0 shadow-sm mb-3" style={{ borderRadius: '6px' }}>
                    <div className="card-body p-2">
                        <div className="row g-2 align-items-center">

                            {/* 1. Search */}
                            <div className="col-md-3">
                                <div className="input-group input-group-sm border rounded">
                                    <span className="input-group-text bg-white border-0"><Search size={14} /></span>
                                    <input
                                        type="text"
                                        className="form-control border-0 shadow-none"
                                        style={{ fontSize: '12px' }}
                                        placeholder="Search Institution..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* 2. Village Selection */}
                            <div className="col-md-2">
                                <div className="input-group input-group-sm border rounded">
                                    <span className="input-group-text bg-white border-0"><MapPin size={14} /></span>
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

                            {/* 3. Categories (Renamed and Placed in same row) */}
                            <div className="col-md-7">
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-muted me-2 text-nowrap" style={{ fontSize: '10px' }}>CATEGORIES:</span>
                                    <div className="d-flex gap-1 overflow-auto hide-scrollbar pb-1">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setSelectedCategory(cat)}
                                                className={`btn btn-sm rounded text-nowrap px-2 py-1 ${selectedCategory === cat
                                                    ? "bg-app text-white fw-bold"
                                                    : "bg-white text-dark border hover-bg-gray"
                                                    }`}
                                                style={{ fontSize: '11px', border: '1px solid var(--border-color)' }}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- CONTENT GRID --- */}
                <div className="d-flex justify-content-between align-items-center mb-2 px-1">
                    <div className="text-muted fw-bold" style={{ fontSize: '10px' }}>
                        DISPLAYING <span className="text-app">{filteredData.length}</span> RECORDS
                    </div>
                    {(searchTerm || selectedCategory !== "All" || selectedVillage !== "All Villages") && (
                        <button onClick={clearFilters} className="btn btn-link btn-sm text-danger text-decoration-none p-0 fw-bold" style={{ fontSize: '10px' }}>
                            <X size={12} className="me-1" />RESET FILTERS
                        </button>
                    )}
                </div>

                <div className="row g-3">
                    {filteredData.map((item) => (
                        <div key={item.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="card h-100 gov-card shadow-sm overflow-hidden">
                                <div className="position-relative" style={{ height: "130px" }}>
                                    <img src={item.image} className="w-100 h-100 object-fit-cover" alt={item.name} />
                                    <div className="position-absolute bottom-0 start-0 m-2">
                                        <span className="badge bg-app text-white" style={{ fontSize: '9px' }}>{item.category}</span>
                                    </div>
                                </div>

                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-1 text-dark text-truncate" style={{ fontSize: '14px' }} title={item.name}>
                                        {item.name}
                                    </h6>

                                    <div className="d-flex align-items-center mb-2" style={{ fontSize: '11px', color: 'var(--gov-red)', fontWeight: '600' }}>
                                        <GraduationCap size={12} className="me-1" /> {item.type}
                                    </div>

                                    <div className="mb-2 text-muted" style={{ fontSize: '11px' }}>
                                        <div className="d-flex align-items-start mb-1">
                                            <MapPin size={12} className="me-2 text-app mt-1 flex-shrink-0" />
                                            <span className="text-truncate-2">{item.address}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <Phone size={12} className="me-2 text-app flex-shrink-0" />
                                            <span>{item.contact}</span>
                                        </div>
                                    </div>

                                    <div className="pt-2 border-top">
                                        <div className="d-flex flex-wrap gap-1">
                                            {item.courses.slice(0, 2).map((course, i) => (
                                                <span key={i} className="badge bg-light text-dark border-0 py-1" style={{ fontSize: '9px', fontWeight: '500' }}>
                                                    • {course}
                                                </span>
                                            ))}
                                        </div>
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

export default Education;