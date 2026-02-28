import { useParams } from "react-router-dom";
import { villagesData } from "../data/villagesData";
import { servicesData } from "../data/servicesData";
import { templesData } from "../data/templesData";

export default function VillageDetails() {
  const { id } = useParams();
  const village = villagesData.find(v => v.id === Number(id));

  const services = servicesData.filter(s => s.village === village.name);
  const temples = templesData.filter(t => t.village === village.name);

  return (
    <div className="container py-4">
      <h2 className="text-primary">{village.name}</h2>
      <img src={village.banner} className="img-fluid mb-3" alt="" />

      <p><strong>Population:</strong> {village.population}</p>
      <p><strong>Panchayat:</strong> {village.panchayat}</p>
      <p><strong>Transport:</strong> {village.transport}</p>

      <iframe
        title="map"
        width="100%"
        height="300"
        src={`https://maps.google.com/maps?q=${village.latitude},${village.longitude}&z=15&output=embed`}
      />

      <h4 className="mt-4">Temples</h4>
      <ul>
        {temples.map(t => <li key={t.id}>{t.templeName}</li>)}
      </ul>

      <h4>Services</h4>
      <ul>
        {services.map(s => <li key={s.id}>{s.name}</li>)}
      </ul>
    </div>
  );
}