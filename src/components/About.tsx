import { useEffect, useRef, useState } from "react";
import { Building2, MapPin, Clock, Users } from "lucide-react";
import hotelLobby from "@/assets/room-deluxe2.jpeg";
import hotelExterior from "@/assets/room-standard2.jpeg";
import roomStandard from "@/assets/room-standard3.jpeg";
import templeView from "@/assets/room-deluxe3.jpeg";

const stats = [
  { icon: Building2, value: 30, suffix: "+", label: "Premium Rooms" },
  { icon: MapPin, value: 5, suffix: " min", label: "Walk to Temple" },
  { icon: Clock, value: 24, suffix: "/7", label: "Support" },
  { icon: Users, value: 100, suffix: "%", label: "Family Friendly" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl font-semibold text-primary">
      {count}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/40">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
              Welcome to Our Residency
            </span>
            <h2 className="section-heading mb-6">
              Comfort Designed for Peaceful Living
            </h2>
            <p className="section-subheading mb-6">
              Nestled in the spiritual heart of Tiruvannamalai, Thiru Annamalaiyar 
              Residency offers a sanctuary of calm for pilgrims and travelers alike. 
              Our thoughtfully designed rooms combine modern comfort with the serene 
              ambiance befitting this sacred land.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Just a short walk from the revered Arunachaleswarar Temple, we provide 
              immaculately clean accommodations, 24/7 support, and the warm hospitality 
              that makes every guest feel at home. Whether you're here for spiritual 
              pursuits or peaceful relaxation, we ensure your stay is truly memorable.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group p-6 rounded-xl bg-card border border-border/50 card-hover"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-4 icon-hover" />
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-48 shadow-lg">
                <img 
                  src={hotelLobby} 
                  alt="Hotel Lobby" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
                <img 
                  src={roomStandard} 
                  alt="Standard Room" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
                <img 
                  src={templeView} 
                  alt="Temple View" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 shadow-lg">
                <img 
                  src={hotelExterior} 
                  alt="Hotel Exterior" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
