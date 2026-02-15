import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

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
    <footer className="gov-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Taluk Office */}
          <div>
            <h3 className="text-lg font-bold mb-3 border-b border-primary-foreground/30 pb-2">
              Hebri Taluk Office
            </h3>
            <div className="space-y-2 text-sm opacity-90">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                Taluk Office Complex, Hebri - 576112, Udupi District, Karnataka
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                08256-232050
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                info@nammahebri.gov.in
              </p>
            </div>
          </div>

          {/* Emergency Numbers */}
          <div>
            <h3 className="text-lg font-bold mb-3 border-b border-primary-foreground/30 pb-2">
              Emergency Numbers
            </h3>
            <div className="space-y-2 text-sm opacity-90">
              <p>🚨 Police: <strong>100 / 08256-232100</strong></p>
              <p>🚒 Fire: <strong>101</strong></p>
              <p>🚑 Ambulance: <strong>108</strong></p>
              <p>📞 Emergency: <strong>112</strong></p>
              <p>🏥 PHC Hebri: <strong>08256-232200</strong></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3 border-b border-primary-foreground/30 pb-2">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-1 opacity-90 hover:opacity-100 hover:underline transition-opacity"
                >
                  <ExternalLink className="h-3 w-3" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & External */}
          <div>
            <h3 className="text-lg font-bold mb-3 border-b border-primary-foreground/30 pb-2">
              Connect With Us
            </h3>
            <div className="space-y-2 text-sm opacity-90">
              <a href="https://karnataka.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <ExternalLink className="h-3 w-3" />
                Karnataka Government Portal
              </a>
              <a href="https://udupi.nic.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <ExternalLink className="h-3 w-3" />
                Udupi District Portal
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Namma Hebri — Official Taluk Information Portal. All rights reserved.</p>
          <p className="mt-1 text-xs">Hebri Taluk, Udupi District, Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
