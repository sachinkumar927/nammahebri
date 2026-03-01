import {
  ArrowRight,
  Bus,
  Landmark,
  Map as MapIcon,
  Navigation,
  Phone,
  Users
} from "lucide-react";
import { useState } from "react";
import "../../App.css";
import { villagesData } from "../../data/villagesData.jsx"; // Ensure path is correct
import "./Style.css";

const Villages = () => {
  const [activeVillage, setActiveVillage] = useState(villagesData[0]);

  return (
    <div className="container-fluid py-4 bg-light min-vh-100">
      <div className="row g-4">

        {/* --- MAIN CONTENT (75% Desktop) --- */}
        <div className="col-12 col-lg-9 order-2 order-lg-1">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            {/* Banner Section */}
            <div className="position-relative" style={{ height: "300px" }}>
              <img
                src={activeVillage.bannerImage}
                className="w-100 h-100 object-fit-cover"
                alt={activeVillage.name}
              />
              <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-dark text-white">
                <h1 className="display-5 fw-bold mb-0">{activeVillage.name}</h1>
                <p className="mb-0 opacity-75">{activeVillage.panchayat}</p>
              </div>
            </div>

            <div className="card-body p-4">
              {/* Description & Stats */}
              <div className="row mb-5">
                <div className="col-md-8">
                  <h5 className="fw-bold text-app mb-3">About the Village</h5>
                  <p className="text-muted leading-relaxed">{activeVillage.description}</p>

                  <div className="row g-3 mt-4">
                    <div className="col-6 col-sm-4">
                      <div className="p-3 bg-white border rounded-3 text-center">
                        <Users size={20} className="text-app mb-2" />
                        <div className="small text-muted">Population</div>
                        <div className="fw-bold">{activeVillage.population.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4">
                      <div className="p-3 bg-white border rounded-3 text-center">
                        <Navigation size={20} className="text-app mb-2" />
                        <div className="small text-muted">Coordinates</div>
                        <div className="fw-bold small">{activeVillage.latitude}, {activeVillage.longitude}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Info Sidebar inside Content */}
                <div className="col-md-4">
                  <div className="bg-light p-3 rounded-4 mt-4 mt-md-0">
                    <h6 className="fw-bold mb-3 d-flex align-items-center">
                      <Phone size={16} className="me-2 text-danger" /> Emergency Contacts
                    </h6>
                    <ul className="list-unstyled small mb-0">
                      {activeVillage.emergencyContacts.map((contact, i) => (
                        <li key={i} className="mb-2 d-flex justify-content-between border-bottom pb-1">
                          <span className="text-muted">{contact.name}</span>
                          <span className="fw-bold text-dark">{contact.number}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <hr />

              {/* Detailed Lists */}
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <h6 className="fw-bold text-dark mb-3 d-flex align-items-center">
                    <MapIcon size={18} className="me-2 text-app" /> Important Places
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {activeVillage.importantPlaces.map((place, i) => (
                      <span key={i} className="badge bg-white text-dark border p-2 fw-normal">
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-md-4">
                  <h6 className="fw-bold text-dark mb-3 d-flex align-items-center">
                    <Bus size={18} className="me-2 text-app" /> Transport
                  </h6>
                  <ul className="list-unstyled small text-muted">
                    {activeVillage.transport.map((item, i) => (
                      <li key={i} className="mb-1">✅ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4">
                  <h6 className="fw-bold text-dark mb-3 d-flex align-items-center">
                    <Landmark size={18} className="me-2 text-app" /> Nearby Towns
                  </h6>
                  <ul className="list-unstyled small text-muted">
                    {activeVillage.nearbyTowns.map((town, i) => (
                      <li key={i} className="mb-1">🚗 {town}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="mt-5">
                <h5 className="fw-bold mb-3">Gallery</h5>
                <div className="row g-2">
                  {activeVillage.images.map((img, i) => (
                    <div key={i} className="col-6 col-md-3">
                      <img src={img} className="img-fluid rounded-3 h-100 object-fit-cover shadow-sm" alt="Village View" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SUB-SIDEBAR (25% Desktop) --- */}
        <div className="col-12 col-lg-3 order-1 order-lg-2">
          <div className="sticky-lg-top" style={{ top: "100px", zIndex: 10 }}>
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-header bg-white py-3 border-0">
                <h5 className="fw-bold mb-0 text-app">Villages in Taluk</h5>
              </div>
              <div className="list-group list-group-flush pb-2" style={{ maxHeight: "75vh", overflowY: "auto" }}>
                {villagesData.map((village) => (
                  <button
                    key={village.id}
                    onClick={() => setActiveVillage(village)}
                    className={`list-group-item list-group-item-action py-3 px-4 border-0 d-flex justify-content-between align-items-center transition ${activeVillage.id === village.id ? "bg-app text-white" : ""
                      }`}
                  >
                    <div>
                      <div className="fw-bold">{village.name}</div>
                      <small className={activeVillage.id === village.id ? "text-white-50" : "text-muted"}>
                        {village.population} Members
                      </small>
                    </div>
                    <ArrowRight size={16} className={activeVillage.id === village.id ? "opacity-100" : "opacity-25"} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Taluk Stats */}
            <div className="card mt-3 bg-gov-blue text-white border-0 rounded-4 p-3 shadow-sm">
              <div className="small opacity-75">Taluk Total Villages</div>
              <h3 className="fw-bold mb-0">{villagesData.length}</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Villages;