import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Users, Maximize, Bed } from "lucide-react";
import room from "@/assets/room-standard3.jpeg";
import room2 from "@/assets/room-standard2.jpeg";
import room3 from "@/assets/room-deluxe.jpeg";
import roomDeluxe from "@/assets/room-deluxe3.jpeg";
import hotelLobby from "@/assets/hotel-lobby.jpg";

const rooms = [
  {
    name: "Standard Room",
    price: "₹2,500",
    priceNote: "per night",
    size: "250 sq ft",
    bed: "Queen Bed",
    maxGuests: 2,
    features: ["AC", "Wi-Fi", "Hot Water", "TV", "Housekeeping"],
    images: [ room2,roomDeluxe,room3],
  },
  {
    name: "Deluxe Room",
    price: "₹3,500",
    priceNote: "per night",
    size: "350 sq ft",
    bed: "King Bed",
    maxGuests: 3,
    features: ["AC", "Wi-Fi", "Hot Water", "TV", "Temple View", "Mini Fridge", "Premium Amenities"],
    images: [roomDeluxe, roomDeluxe],
  },
];

function RoomCard({ room }: { room: typeof rooms[0] }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + room.images.length) % room.images.length);
  };


  return (
    <div className="group bg-card rounded-2xl border border-border/50 shadow-card overflow-hidden card-hover">
      {/* Image Slider */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={room.images[currentImage]}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {room.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentImage ? "bg-primary w-6" : "bg-card/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-serif text-2xl font-semibold text-foreground">{room.name}</h3>
          <div className="text-right">
            <span className="text-2xl font-serif font-semibold text-primary">{room.price}</span>
            <span className="text-sm text-muted-foreground block">{room.priceNote}</span>
          </div>
        </div>

        {/* Room Details */}
        <div className="flex items-center gap-4 mb-6 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4" />
            <span className="text-sm">{room.size}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{room.bed}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span className="text-sm">Max {room.maxGuests}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {room.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 text-sm bg-secondary rounded-full text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        <Button asChild className="btn-primary w-full">
          <a href="https://jkglobalitsolutions.github.io/Thiruannamalaiyar-website-dynamic-link/" target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </Button>
      </div>
    </div>
  );
}

export function Rooms() {
  return (
    <section id="rooms" className="py-20 md:py-32 bg-gradient-to-b from-secondary/40 to-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Accommodations
          </span>
          <h2 className="section-heading mb-6">
            Choose Your Perfect Room
          </h2>
          <p className="section-subheading mx-auto">
            From comfortable standard rooms to spacious deluxe suites, 
            find the perfect space for your peaceful retreat.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {rooms.map((room) => (
            <RoomCard key={room.name} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
