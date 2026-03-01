import React, { useState } from "react";
import { communityData, communityCategories, successStories, galleryPhotos, villages } from "../../data/CommunityData";
import { Search, MapPin, Camera, Star } from "lucide-react";
import "../../App.css";

const Community = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedVillage, setSelectedVillage] = useState("All Villages");

    // 1. FILTER LOGIC FOR MAIN CARDS
    const filteredMain = communityData.filter(item => {
        const matchesTab = activeTab === "All" || item.category === activeTab;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchTerm.toLowerCase());
        // Added .trim() to ensure village names match exactly even with extra spaces
        const matchesVillage = selectedVillage === "All Villages" ||
            item.village.trim() === selectedVillage.trim();
        return matchesTab && matchesSearch && matchesVillage;
    });

    // 2. FILTER LOGIC FOR SUCCESS STORIES
    const filteredStories = successStories.filter(story =>
        selectedVillage === "All Villages" || story.village.trim() === selectedVillage.trim()
    );

    return (
        <div className="bg-light min-vh-100 pb-5">
            {/* INTRODUCTION SECTION */}
            <div className="bg-app text-white py-4 shadow-sm border-bottom border-warning border-4">
                <div className="container-fluid px-3">
                    <h4 className="fw-bold mb-1" style={{ fontSize: '18px' }}>Community Spirit</h4>
                    <p className="mb-0 opacity-80" style={{ fontSize: '12px', maxWidth: '600px' }}>
                        Hebri is a tapestry of diversity and unity. We emphasize citizen participation
                        to build a progressive and culturally rich Taluk for all.
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
                                placeholder="Search groups or events..."
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
                    <button
                        onClick={() => setActiveTab("All")}
                        className={`btn btn-sm rounded-pill text-nowrap px-3 ${activeTab === "All" ? 'bg-app text-white shadow' : 'btn-white border bg-white'}`}
                        style={{ fontSize: '12px' }}>All</button>
                    {communityCategories.map(cat => (
                        <button key={cat} onClick={() => setActiveTab(cat)}
                            className={`btn btn-sm rounded-pill text-nowrap px-3 ${activeTab === cat ? 'bg-app text-white shadow' : 'btn-white border bg-white'}`}
                            style={{ fontSize: '12px' }}>{cat}</button>
                    ))}
                </div>

                {/* MAIN GRID (GRID 4) */}
                <h6 className="fw-bold mb-3 px-1" style={{ fontSize: '14px' }}>{activeTab} Content</h6>
                <div className="row gx-2 gy-2 mb-5">
                    {filteredMain.length > 0 ? filteredMain.map(item => (
                        <div key={item.id} className="col-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden gov-card">
                                <div className="position-relative">
                                    <img src={item.image} className="w-100 object-fit-cover" style={{ height: '100px' }} alt={item.name} />
                                    <span className="badge bg-app position-absolute top-0 start-0 m-2" style={{ fontSize: '9px' }}>{item.type}</span>
                                </div>
                                <div className="card-body p-2 d-flex flex-column">
                                    <h6 className="fw-bold text-dark mb-1 text-truncate" style={{ fontSize: '14px' }}>{item.name}</h6>
                                    <p className="text-muted mb-1" style={{ fontSize: '10px' }}><MapPin size={10} /> {item.village}</p>
                                    <p className="text-secondary mb-2 flex-grow-1" style={{ fontSize: '12px', lineHeight: '1.3' }}>{item.desc}</p>
                                    <button className="btn bg-app text-white btn-sm w-100 py-1 fw-bold" style={{ fontSize: '12px' }}>VIEW INFO</button>
                                </div>
                            </div>
                        </div>
                    )) : <div className="col-12 text-center text-muted fs-12 py-5">No programs found for this selection.</div>}
                </div>

                {/* SUCCESS STORIES (GRID 4) */}
                <div className="mt-5 pt-3 border-top">
                    <h6 className="fw-bold px-1 mb-3" style={{ fontSize: '14px' }}>
                        <Star size={16} className="me-2 text-warning fill-warning" /> Success Stories
                    </h6>
                    <div className="row gx-2 gy-2">
                        {filteredStories.length > 0 ? filteredStories.map(story => (
                            <div key={story.id} className="col-6 col-lg-3">
                                <div className="p-2 h-100 rounded-3 bg-white border shadow-sm border-start border-primary border-3">
                                    <span className="text-app fw-bold" style={{ fontSize: '10px' }}>{story.village}</span>
                                    <h6 className="fw-bold mb-1" style={{ fontSize: '12px' }}>{story.title}</h6>
                                    <p className="text-success mb-0 fw-bold" style={{ fontSize: '10px' }}>{story.result}</p>
                                </div>
                            </div>
                        )) : <div className="col-12 text-muted fs-12 ps-2">No stories for this village.</div>}
                    </div>
                </div>

                {/* COMMUNITY GALLERY (GRID 4) */}
                <div className="mt-5">
                    <h6 className="fw-bold px-1 mb-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <Camera size={16} className="me-2 text-danger" /> Community Gallery
                    </h6>
                    <div className="row gx-1 gy-1">
                        {galleryPhotos.map((imgUrl, i) => (
                            <div key={i} className="col-3 col-lg-3">
                                <div className="ratio ratio-1x1 rounded-2 overflow-hidden shadow-sm">
                                    <img
                                        src={imgUrl}
                                        alt={`Gallery ${i}`}
                                        className="object-fit-cover w-100 h-100"
                                        onError={(e) => e.target.src = 'https://via.placeholder.com/150?text=No+Image'}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Community;