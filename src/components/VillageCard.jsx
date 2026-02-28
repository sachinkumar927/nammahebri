import { Link } from "react-router-dom";

export default function VillageCard({ village }) {
  return (
    <div className="col-lg-3 col-md-6 col-12 mb-4">
      <div className="card shadow hover-card">
        <img src={village.banner} className="card-img-top" alt={village.name} />
        <div className="card-body">
          <h6>{village.name}</h6>
          <Link to={`/village/${village.id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}