import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import "../App.css";
const quickLinks = [
  { label: "Villages", path: "/villages" },
  { label: "Temples", path: "/temples" },
  { label: "Services", path: "/services" },
  { label: "Emergency", path: "/emergency" },
  { label: "Govt Offices", path: "/government-offices" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="gov-footer pt-4 pb-3">

      <div className="container">

        <div className="row">

          {/* Taluk Office */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h5 className="text-white">Hebri Taluk Office</h5>

            <p className="d-flex">
              <MapPin size={16} className="me-2 mt-1" />
              Taluk Office Complex, Hebri - 576112,
              Udupi District, Karnataka
            </p>

            <p>
              <Phone size={14} className="me-2" />
              08256-232050
            </p>

            <p>
              <Mail size={14} className="me-2" />
              info@nammahebri.gov.in
            </p>
          </div>

          {/* Emergency */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h5 className="text-white">Emergency Numbers</h5>

            <p>🚨 Police: <strong>100 / 08256-232100</strong></p>
            <p>🚒 Fire: <strong>101</strong></p>
            <p>🚑 Ambulance: <strong>108</strong></p>
            <p>📞 Emergency: <strong>112</strong></p>
            <p>🏥 PHC Hebri: <strong>08256-232200</strong></p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h5 className="text-white">Quick Links</h5>

            {quickLinks.map((link) => (
              <p key={link.path}>
                <Link to={link.path}>
                  <ExternalLink size={14} className="me-2" />
                  {link.label}
                </Link>
              </p>
            ))}
          </div>

          {/* External */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h5 className="text-white">Connect With Us</h5>

            <p>
              <a
                href="https://karnataka.gov.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} className="me-2" />
                Karnataka Government Portal
              </a>
            </p>

            <p>
              <a
                href="https://udupi.nic.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} className="me-2" />
                Udupi District Portal
              </a>
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-mute gov-footer-bottom pt-3 mt-3">
          © {new Date().getFullYear()} Namma Hebri — Official Taluk Information Portal. All rights reserved.
          <br />
          <small>Hebri Taluk, Udupi District, Karnataka, India</small>
        </div>

      </div>

    </footer>
  );
};

export default Footer;