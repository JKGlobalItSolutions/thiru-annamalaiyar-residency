import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import hotelLobby from "@/assets/hotel-lobby.jpeg";
import hotelExterior from "@/assets/hotel-exterior.jpeg";
import roomStandard from "@/assets/room-standard2.jpeg";
import roomDeluxe from "@/assets/room-deluxe3.jpeg";
import templeView from "@/assets/temple.png";
import heroImage from "@/assets/temple.png";

const heroSliderImages = [
  {
    src: heroImage,
    alt: "Arunachala Temple View",
    title: "Divine Arunachala",
    subtitle: "Breathtaking views of the sacred mountain"
  },
  {
    src: hotelExterior,
    alt: "Hotel Exterior",
    title: "Our Property",
    subtitle: "Modern comfort meets traditional hospitality"
  },
  {
    src: hotelLobby,
    alt: "Hotel Lobby",
    title: "Welcome Lobby",
    subtitle: "A warm reception awaits you"
  }
];

const galleryItems = [
  { image: hotelLobby, label: "Lobby", span: "col-span-2 row-span-2" },
  { image: roomStandard, label: "Standard Room", span: "col-span-1" },
  { image: templeView, label: "Temple View", span: "col-span-1" },
  { image: roomDeluxe, label: "Deluxe Room", span: "col-span-1" },
  { image: heroImage, label: "Arunachala View", span: "col-span-1 row-span-2" },
  { image: hotelExterior, label: "Property", span: "col-span-1" },
  { image: roomStandard, label: "Room Interior", span: "col-span-2" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSliderImages.length) % heroSliderImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Gallery
          </span>
          <h2 className="section-heading mb-6">
            A Glimpse of Our Residency
          </h2>
          <p className="section-subheading mx-auto">
            Explore the serene spaces and divine views that await you 
            at Thiru Annamalaiyar Residency.
          </p>
        </div>

       

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg ${item.span}`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-primary-foreground">
                  <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                  <span className="font-medium">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card/20 flex items-center justify-center text-primary-foreground hover:bg-card/40 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={galleryItems[selectedImage].image}
              alt={galleryItems[selectedImage].label}
              className="max-w-4xl max-h-[80vh] w-full rounded-2xl object-contain animate-scale-in"
            />
          </div>
        )}
      </div>
    </section>
  );
}
