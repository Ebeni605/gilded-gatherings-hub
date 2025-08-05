import { MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

// TikTok Icon Component
const TikTokIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const handleMapClick = () => {
    // Opens Google Maps with Mafi Restaurant location (placeholder coordinates)
    window.open("https://maps.google.com/?q=Mafi+Restaurant", "_blank");
  };

  const handleSocialClick = (platform: string) => {
    // Placeholder social media links
    const links = {
      instagram: "https://instagram.com/mafirestaurant",
      tiktok: "https://tiktok.com/@mafirestaurant",
      facebook: "https://facebook.com/mafirestaurant"
    };
    window.open(links[platform as keyof typeof links], "_blank");
  };

  return (
    <footer className="bg-background border-t border-primary/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex justify-center md:justify-start">
              <img 
                src="/lovable-uploads/95062c7d-275a-4648-b44f-bfaaab0b29ca.png" 
                alt="Mafi Restaurant Logo" 
                className="h-16 w-16 object-cover rounded-full border-2 border-primary"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                Mafi Restaurant
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                Experience luxury dining with exquisite cuisine and elegant atmosphere in the heart of the city.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-semibold text-primary">
              Contact & Location
            </h4>
            <div className="space-y-4">
              <div className="text-foreground-muted space-y-2">
                <div>
                  📞 <a href="tel:+251945184545" className="hover:text-primary transition-colors">+251 945 184 545</a>
                </div>
                <div>
                  📞 <a href="tel:+25145666555" className="hover:text-primary transition-colors">+251 456 665 55</a>
                </div>
                <div>
                  ✉️ <a href="mailto:mafirestaurant@gmail.com" className="hover:text-primary transition-colors">mafirestaurant@gmail.com</a>
                </div>
              </div>
              <Button 
                onClick={handleMapClick}
                variant="gold"
                className="flex items-center gap-2"
              >
                <MapPin className="h-4 w-4" />
                Map It
              </Button>
            </div>
          </div>

          {/* Social Media & Credits */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-semibold text-primary">
              Connect With Us
            </h4>
            <div className="flex justify-center md:justify-start gap-4">
              <Button
                onClick={() => handleSocialClick("tiktok")}
                variant="outline"
                size="icon"
                className="gold-hover border-primary/20 text-primary hover:text-background hover:bg-primary"
              >
                <TikTokIcon />
              </Button>
              <Button
                onClick={() => handleSocialClick("instagram")}
                variant="outline"
                size="icon"
                className="gold-hover border-primary/20 text-primary hover:text-background hover:bg-primary"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                onClick={() => handleSocialClick("facebook")}
                variant="outline"
                size="icon"
                className="gold-hover border-primary/20 text-primary hover:text-background hover:bg-primary"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20 text-center">
          <p className="text-foreground-muted">
            © 2024 Mafi Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;