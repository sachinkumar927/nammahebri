import { useState } from "react";
import { templesData } from "../data/templesData";
import { calculateDistance } from "../utils/distanceCalculator";
import TempleCard from "../components/TempleCard";

export default function TemplesPage() {
  const [search, setSearch] = useState("");
  const [temples, setTemples] = useState(templesData);

  const handleNearby = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const updated = templesData.map((temple) => ({
        ...temple,
        distance: calculateDistance(
          latitude,
          longitude,
          temple.latitude,
          temple.longitude
        )
      }));

      setTemples(updated.sort((a, b) => a.distance - b.distance));
    });
  };

  const filtered = temples.filter((t) =>
    t.templeName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-primary">Temples of Hebri</h2>

      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Temple"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleNearby}>
          Find Nearby
        </button>
      </div>

      <div className="row">
        {filtered.map((temple) => (
          <TempleCard key={temple.id} temple={temple} />
        ))}
      </div>
    </div>
  );
}