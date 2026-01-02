import {
  Wifi,
  Snowflake,
  Flame,
  Building,
  Car,
  Camera,
  Sparkles,
  Zap,
  Mountain,
  Clock,
} from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "High-speed internet throughout the property",
  },
  {
    icon: Snowflake,
    title: "AC Rooms",
    description: "Climate-controlled comfort in every room",
  },
  {
    icon: Flame,
    title: "Hot Water",
    description: "24/7 hot water supply for your convenience",
  },
  {
    icon: Building,
    title: "Lift Facility",
    description: "Easy access to all floors",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Secure parking space for your vehicles",
  },
  {
    icon: Camera,
    title: "CCTV Security",
    description: "Round-the-clock surveillance for safety",
  },
  {
    icon: Sparkles,
    title: "Housekeeping",
    description: "Daily room cleaning and fresh linens",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted power supply",
  },
  {
    icon: Mountain,
    title: "Temple View",
    description: "Breathtaking views of Arunachala",
  },
  {
    icon: Clock,
    title: "24/7 Front Desk",
    description: "Always here to assist you",
  },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-20 md:py-32 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Our Amenities
          </span>
          <h2 className="section-heading mb-6">
            Everything You Need for a Peaceful Stay
          </h2>
          <p className="section-subheading mx-auto">
            We've thoughtfully curated amenities to ensure your comfort and 
            convenience during your spiritual journey.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 shadow-card card-hover text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <amenity.icon className="w-7 h-7 text-primary icon-hover" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{amenity.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
