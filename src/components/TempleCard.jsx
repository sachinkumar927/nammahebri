import { Link } from "react-router-dom";

export default function TempleCard({ temple }) {
  return (
    <div className="col-lg-3 col-md-6 col-12 mb-4">
      <div className="card shadow hover-card h-100">
        <img src={temple.imageUrl} className="card-img-top" alt={temple.templeName} />
        <div className="card-body">
          <h6>{temple.templeName}</h6>
          <span className="badge bg-warning">{temple.badge}</span>
          <p className="small">{temple.village}</p>
          {temple.distance && (
            <p className="text-success">{temple.distance} KM Away</p>
          )}
          <Link to={`/temple/${temple.id}`} className="btn btn-outline-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}