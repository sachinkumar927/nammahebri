import { useState } from "react";
import { servicesData } from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";
import { calculateDistance } from "../utils/distanceCalculator";

export default function ServicesPage() {
    const [services, setServices] = useState(servicesData);
    const [search, setSearch] = useState("");

    const handleNearby = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            const updated = servicesData.map((service) => ({
                ...service,
                distance: calculateDistance(
                    latitude,
                    longitude,
                    service.latitude,
                    service.longitude
                ),
            }));

            setServices(updated.sort((a, b) => a.distance - b.distance));
        });
    };

    const filtered = services.filter((service) =>
        service.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container py-4">
            <h2 className="text-primary fw-bold mb-4">Service Directory</h2>

            <div className="d-flex gap-2 mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search services..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleNearby}>
                    Nearby
                </button>
            </div>

            <div className="row">
                {filtered.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        distance={service.distance}
                    />
                ))}
            </div>
        </div>
    );
}