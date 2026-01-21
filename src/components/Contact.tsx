import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "standard",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Booking Request Received!",
      description: "We'll contact you shortly to confirm your reservation.",
    });

    setFormData({
      name: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      roomType: "standard",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Contact Us
          </span>
          <h2 className="section-heading mb-6">
            Book Your Peaceful Stay
          </h2>
          <p className="section-subheading mx-auto">
            Ready to experience serenity? Fill out the form or contact us directly 
            to reserve your room.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-card">
              <h3 className="font-serif text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      596/1B, Ayyankulam Street,<br />
                      Tiruvannamalai – 606601
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+919488642823" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 94886 42823
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Check-in / Check-out</h4>
                    <p className="text-muted-foreground">
                      Check-in: 12:00 PM | Check-out: 12:00 PM
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/919488642823?text=Hello! I'd like to book a room at Thiru Annamalaiyar Residency."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 hover:bg-green-100 transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="font-medium">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-64 border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d579.634649102379!2d79.07156056646136!3d12.227847286756383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc11a7f66ebf3%3A0x816f5208644b3604!2sThiru%20Annamalaiyar%20Residency!5e0!3m2!1sen!2sin!4v1767436623450!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thiru Annamalaiyar Residency Location"
              />
            </div>
          </div>

          {/* Booking Form */}
          <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-card">
            <h3 className="font-serif text-2xl font-semibold mb-6">Quick Booking</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium mb-2">
                    Check-in Date
                  </label>
                  <Input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium mb-2">
                    Check-out Date
                  </label>
                  <Input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="roomType" className="block text-sm font-medium mb-2">
                  Room Type
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full h-12 rounded-xl border border-input bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="standard">Standard Room - ₹2,500/night</option>
                  <option value="deluxe">Deluxe Room - ₹4,000/night</option>
                </select>
              </div>

              <Button
                type="submit"
                className="btn-primary w-full h-14 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Submit Booking Request
                  </span>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll contact you within 30 minutes to confirm your booking
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
