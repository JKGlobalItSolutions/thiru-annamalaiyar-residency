import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Rooms", href: "#rooms" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const amenityLinks = [
  "Free Wi-Fi",
  "AC Rooms",
  "Temple View",
  "24/7 Support",
  "Parking",
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-serif text-2xl font-semibold">Thiru Annamalaiyar</span>
              <span className="block text-xs tracking-[0.3em] text-primary-foreground/70 uppercase mt-1">
                Residency
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Experience peaceful living at the foot of sacred Arunachala. 
              Premium rooms, divine surroundings, and warm hospitality await you.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Amenities */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Amenities</h4>
            <ul className="space-y-3">
              {amenityLinks.map((amenity) => (
                <li key={amenity} className="text-primary-foreground/70">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-foreground/70" />
                <span className="text-primary-foreground/70">
                  596/1B, Ayyankulam Street,<br />
                  Tiruvannamalai – 606601
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/70" />
                <a
                  href="tel:+919488642823"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +91 94886 42823
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/70" />
                <a
                  href="mailto:info@thiruannamalaiyar.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  thiruannamalaiyarresidency@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <p className="text-center text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Thiru Annamalaiyar Residency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
