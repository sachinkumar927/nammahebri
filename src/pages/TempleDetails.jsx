import { useParams } from "react-router-dom";
import { templesData } from "../data/templesData";

export default function TempleDetails() {
  const { id } = useParams();
  const temple = templesData.find((t) => t.id === Number(id));

  if (!temple) {
    return <div className="container py-4">Temple not found</div>;
  }

  return (
    <div className="container py-4">
      <h2 className="text-primary fw-bold">{temple.templeName}</h2>
      <img
        src={temple.imageUrl}
        alt={temple.templeName}
        className="img-fluid mb-3 rounded"
      />

      <p><strong>Deity:</strong> {temple.deityName}</p>
      <p><strong>Village:</strong> {temple.village}</p>
      <p><strong>Established:</strong> {temple.establishedYear}</p>
      <p><strong>Pooja Timings:</strong> {temple.poojaTimings}</p>
      <p><strong>Festival:</strong> {temple.festivalDetails}</p>
      <p><strong>Contact:</strong> {temple.contactNumber}</p>

      <p className="mt-3">{temple.history}</p>

      <h5 className="mt-4">Location Map</h5>

      <iframe
        title="map"
        width="100%"
        height="300"
        className="rounded"
        src={`https://maps.google.com/maps?q=${temple.latitude},${temple.longitude}&z=15&output=embed`}
      ></iframe>
    </div>
  );
}