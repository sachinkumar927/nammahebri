import { Link } from "react-router-dom";
import {
    MapPin,
    GraduationCap,
    Heart,
    ShoppingBag,
    Wrench,
    Church,
    AlertTriangle,
    Building,
    Palmtree,
    Briefcase,
    Leaf,
    Users,
    Phone,
} from "lucide-react";

import { villagesData } from "../../data/villagesData.jsx";
import { templesData } from "../../data/templesData.jsx";

const quickAccessItems = [
    { label: "Villages", path: "/villages", icon: MapPin, color: "bg-gov-blue" },
    { label: "Education", path: "/education", icon: GraduationCap, color: "bg-gov-blue" },
    { label: "Healthcare", path: "/healthcare", icon: Heart, color: "bg-gov-red" },
    { label: "Daily Needs", path: "/daily-needs", icon: ShoppingBag, color: "bg-gov-gold" },
    { label: "Services", path: "/services", icon: Wrench, color: "bg-gov-blue" },
    { label: "Temples", path: "/temples", icon: Church, color: "bg-gov-gold" },
    { label: "Emergency", path: "/emergency", icon: AlertTriangle, color: "bg-gov-red" },
    { label: "Govt Offices", path: "/government-offices", icon: Building, color: "bg-gov-blue" },
    { label: "Tourism", path: "/tourism", icon: Palmtree, color: "bg-gov-green" },
    { label: "Business & Jobs", path: "/business-jobs", icon: Briefcase, color: "bg-gov-blue" },
    { label: "Agriculture", path: "/agriculture", icon: Leaf, color: "bg-gov-green" },
    { label: "Community", path: "/community", icon: Users, color: "bg-gov-blue" },
];

const stats = [
    { label: "Villages", value: `${villagesData.length}+` },
    { label: "Temples", value: `${templesData.length}+` },
    { label: "Population", value: "25,000+" },
    { label: "Area", value: "350 sq km" },
];

const Home = () => {

    /* SAFE Upcoming Festival Extraction (Fixes map error permanently) */
    const upcomingFestivals = templesData.flatMap((t) => {
        if (Array.isArray(t.festivalDetails)) {
            return t.festivalDetails.map((f) => ({
                ...f,
                temple: t.templeName,
            }));
        }
        return [];
    }).slice(0, 4);

    return (
        <div>
            {/* ================= HERO ================= */}
            <section className="hero-section text-center d-flex align-items-center justify-content-center">
                <div className="container hero-content">
                    <span className="badge bg-warning text-dark mb-3 fw-bold px-3 py-2 text-uppercase letter-spacing-1">
                        Official Portal
                    </span>

                    <h1 className="display-4 fw-bold text-white mb-3 text-shadow">
                        ನಮ್ಮ ಹೆಬ್ರಿ — Namma Hebri
                    </h1>

                    <p className="lead text-white mb-4 opacity-90 mx-auto" style={{ maxWidth: "700px" }}>
                        Experience the gateway to the Western Ghats. Your one-stop portal for
                        Hebri Taluk information — villages, temples, and citizen services.
                    </p>

                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <Link to="/villages" className="btn btn-warning btn-lg fw-bold px-4 shadow">
                            Explore Villages
                        </Link>

                        <Link to="/services" className="btn btn-outline-light btn-lg fw-semibold px-4 backdrop-blur">
                            Browse Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="py-5 bg-white border-bottom">
                <div className="container">
                    <div className="row text-center g-4">
                        {stats.map((stat, index) => (
                            <div key={stat.label} className={`col-6 col-md-3 ${index !== stats.length - 1 ? 'border-end-md' : ''}`}>
                                <div className="px-2">
                                    <h2 className="fw-bold gov-text-blue display-6 mb-1">
                                        {stat.value}
                                    </h2>
                                    <div className="text-uppercase fw-bold text-muted small letter-spacing-1">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= QUICK ACCESS ================= */}
            <section className="py-4">
                <div className="container">
                    <h2 className="gov-section-title fw-bold">
                        Quick Access
                    </h2>

                    <div className="row g-3">
                        {quickAccessItems.map((item) => (
                            <div key={item.path} className="col-6 col-md-3 col-lg-2">
                                <Link to={item.path} className="text-decoration-none">
                                    <div className="gov-card p-3 text-center h-100">
                                        <div className={`icon-circle ${item.color} mx-auto mb-2`}>
                                            <item.icon size={20} />
                                        </div>

                                        <div className="fw-bold text-dark">
                                            {item.label}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* ================= UPCOMING EVENTS ================= */}
            {upcomingFestivals.length > 0 && (
                <section className="py-4 bg-light">
                    <div className="container">
                        <h2 className="gov-section-title fw-bold">
                            Upcoming Events
                        </h2>

                        <div className="row g-3">
                            {upcomingFestivals.map((f, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-3">
                                    <div className="gov-card p-3 h-100">
                                        <div className="badge bg-warning text-dark mb-2">
                                            {f.month}
                                        </div>

                                        <div className="fw-bold">
                                            {f.name}
                                        </div>

                                        <div className="small text-muted mb-1">
                                            {f.temple}
                                        </div>

                                        <div className="small">
                                            {f.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ================= EMERGENCY ================= */}
            <section className="py-4 bg-light">
                <div className="container">
                    <h2 className="gov-section-title fw-bold">
                        <AlertTriangle size={20} className="me-2 text-danger" />
                        Emergency Numbers
                    </h2>

                    <div className="row g-3">
                        {[
                            { label: "Police", number: "100", icon: "🚨" },
                            { label: "Fire", number: "101", icon: "🚒" },
                            { label: "Ambulance", number: "108", icon: "🚑" },
                            { label: "Emergency", number: "112", icon: "📞" },
                            { label: "PHC Hebri", number: "08256-232200", icon: "🏥" },
                        ].map((e) => (
                            <div key={e.label} className="col-12 col-md-6 col-lg-4 col-xl-2">
                                <div className="gov-card p-3 h-100">
                                    <div className="d-flex align-items-center">
                                        <span style={{ fontSize: "1.6rem", marginRight: "12px" }}>
                                            {e.icon}
                                        </span>

                                        <div>
                                            <div className="fw-bold">{e.label}</div>
                                            <a
                                                href={`tel:${e.number}`}
                                                className="text-primary fw-semibold text-decoration-none"
                                            >
                                                <Phone size={14} className="me-1" />
                                                {e.number}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;