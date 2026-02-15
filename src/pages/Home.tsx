import { Link } from "react-router-dom";
import {
  MapPin, GraduationCap, Heart, ShoppingBag, Wrench, Church, AlertTriangle,
  Building, Palmtree, Briefcase, Leaf, Users, Phone
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { villagesData } from "@/data/villagesData";
import { templesData } from "@/data/templesData";

const quickAccessItems = [
  { label: "Villages", path: "/villages", icon: MapPin, color: "bg-gov-blue" },
  { label: "Education", path: "/education", icon: GraduationCap, color: "bg-gov-blue-light" },
  { label: "Healthcare", path: "/healthcare", icon: Heart, color: "bg-gov-red" },
  { label: "Daily Needs", path: "/daily-needs", icon: ShoppingBag, color: "bg-gov-gold" },
  { label: "Services", path: "/services", icon: Wrench, color: "bg-gov-blue" },
  { label: "Temples", path: "/temples", icon: Church, color: "bg-gov-gold" },
  { label: "Emergency", path: "/emergency", icon: AlertTriangle, color: "bg-gov-red" },
  { label: "Govt Offices", path: "/government-offices", icon: Building, color: "bg-gov-blue-light" },
  { label: "Tourism", path: "/tourism", icon: Palmtree, color: "bg-gov-green" },
  { label: "Business & Jobs", path: "/business-jobs", icon: Briefcase, color: "bg-gov-blue" },
  { label: "Agriculture", path: "/agriculture", icon: Leaf, color: "bg-gov-green" },
  { label: "Community", path: "/community", icon: Users, color: "bg-gov-blue-light" },
];

const stats = [
  { label: "Villages", value: `${villagesData.length}+` },
  { label: "Temples", value: `${templesData.length}+` },
  { label: "Population", value: "25,000+" },
  { label: "Area", value: "350 sq km" },
];

const Home = () => {
  const upcomingFestivals = templesData
    .flatMap((t) => t.festivalDetails.map((f) => ({ ...f, temple: t.templeName })))
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="gov-gradient text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-accent text-accent-foreground mb-4 text-sm">Official Portal</Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            ನಮ್ಮ ಹೆಬ್ರಿ — Namma Hebri
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Your one-stop portal for Hebri Taluk information — villages, temples, services, and more.
            Udupi District, Karnataka.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/villages">Explore Villages</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="gov-section-title">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {quickAccessItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Card className="gov-card hover:scale-105 transition-transform h-full">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-primary-foreground`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="py-10 bg-destructive/5">
        <div className="container mx-auto px-4">
          <h2 className="gov-section-title flex items-center gap-2">
            <AlertTriangle className="h-7 w-7 text-destructive" />
            Emergency Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Police", number: "100", icon: "🚨" },
              { label: "Fire", number: "101", icon: "🚒" },
              { label: "Ambulance", number: "108", icon: "🚑" },
              { label: "Emergency", number: "112", icon: "📞" },
              { label: "PHC Hebri", number: "08256-232200", icon: "🏥" },
            ].map((e) => (
              <Card key={e.label} className="gov-card border-destructive/20">
                <CardContent className="p-4 flex items-center gap-3">
                  <span className="text-2xl">{e.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{e.label}</p>
                    <a href={`tel:${e.number}`} className="text-primary font-bold text-lg flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {e.number}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Temples */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="gov-section-title">Featured Temples</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {templesData.slice(0, 4).map((temple) => (
            <Link key={temple.id} to={`/temples/${temple.id}`}>
              <Card className="gov-card overflow-hidden hover:scale-[1.02] transition-transform h-full">
                <img
                  src={temple.imageUrl}
                  alt={temple.templeName}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground text-sm mb-1">{temple.templeName}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{temple.deityName} • {temple.village}</p>
                  <div className="flex flex-wrap gap-1">
                    {temple.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-[10px]">{badge}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming Festivals */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="gov-section-title">Upcoming Festivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingFestivals.map((f, i) => (
              <Card key={i} className="gov-card">
                <CardContent className="p-4">
                  <Badge className="mb-2 bg-accent text-accent-foreground">{f.month}</Badge>
                  <h3 className="font-bold text-foreground mb-1">{f.name}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{f.temple}</p>
                  <p className="text-sm text-foreground/80">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
