import { Link } from "react-router-dom";

export default function ServiceCard({ service, distance }) {
  return (
    <div className="col-lg-3 col-md-6 col-12 mb-4">
      <div className="card h-100 shadow-sm hover-card">
        <img src={service.imageUrl} className="card-img-top" alt={service.name} />
        <div className="card-body">
          <h6 className="fw-bold">{service.name}</h6>
          <span className="badge bg-secondary me-2">{service.category}</span>
          <span className="badge bg-info">{service.type}</span>
          <p className="small mt-2">{service.village}</p>
          <p className="small">📞 {service.contact}</p>
          {distance && <p className="text-success">{distance} KM Away</p>}
          <Link to="#" className="btn btn-outline-primary btn-sm mt-2">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}