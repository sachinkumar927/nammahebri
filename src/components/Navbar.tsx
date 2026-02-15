import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Villages", path: "/villages" },
  { label: "Education", path: "/education" },
  { label: "Healthcare", path: "/healthcare" },
  { label: "Daily Needs", path: "/daily-needs" },
  { label: "Services", path: "/services" },
  { label: "Temples", path: "/temples" },
  { label: "Emergency", path: "/emergency" },
  { label: "Govt Offices", path: "/government-offices" },
  { label: "Tourism", path: "/tourism" },
  { label: "Business & Jobs", path: "/business-jobs" },
  { label: "Agriculture", path: "/agriculture" },
  { label: "Community", path: "/community" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="gov-gradient text-primary-foreground py-1 px-4 text-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="h-3 w-3" />
          <span>Hebri Taluk, Udupi District, Karnataka</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span>📞 Emergency: 112</span>
          <span>📧 info@nammahebri.gov.in</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              ನ
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary leading-tight">Namma Hebri</h1>
              <p className="text-[10px] text-muted-foreground leading-tight">Official Taluk Information Portal</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 flex-wrap justify-end">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 overflow-y-auto">
              <SheetTitle className="text-primary font-bold">Navigation</SheetTitle>
              <nav className="flex flex-col gap-1 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
