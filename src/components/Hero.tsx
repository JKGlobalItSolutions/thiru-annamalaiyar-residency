import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/temple.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" /> */}
      
      {/* Warm color overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-hero-start/30 to-hero-end/20" /> */}

      {/* Content */}
      <div className="container relative z-10 text-center px-6 py-32">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-foreground font-medium">
              Tiruvannamalai's Premier Residency
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-foreground leading-tight mb-6 drop-shadow-lg">
            Stay in Serenity at the
            <span className="block text-primary mt-2">Foot of Arunachala</span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-up-delay text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            Peaceful rooms, divine surroundings, and warm hospitality
            near Arunachala Temple, Tiruvannamalai.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
           <Button
  onClick={() =>
    window.open(
      "https://jkglobalitsolutions.github.io/Thiruannamalaiyar-website-dynamic-link/",
      "_blank",
      "noopener,noreferrer"
    )
  }
  className="btn-primary text-lg px-8 py-6"
>
  Book Your Stay
</Button>

            <a href="tel:+919488642823">
              <Button
                variant="outline"
                className="btn-secondary text-lg px-8 py-6 bg-card/80 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-foreground/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
