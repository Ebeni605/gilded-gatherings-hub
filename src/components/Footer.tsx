import { MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleMapClick = () => {
    // Opens Google Maps with Mafi Restaurant location (placeholder coordinates)
    window.open("https://maps.google.com/?q=Mafi+Restaurant", "_blank");
  };

  const handleSocialClick = (platform: string) => {
    // Placeholder social media links
    const links = {
      instagram: "https://instagram.com/mafirestaurant",
      tiktok: "https://tiktok.com/@mafirestaurant"
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
                className="h-16 w-16 object-contain"
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
              <p className="text-foreground-muted">
                📞 +251 11 123 4567<br />
                ✉️ info@mafirestaurant.com
              </p>
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
                onClick={() => handleSocialClick("instagram")}
                variant="outline"
                size="icon"
                className="gold-hover border-primary/20"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                onClick={() => handleSocialClick("tiktok")}
                variant="outline"
                size="icon"
                className="gold-hover border-primary/20"
              >
                <div className="h-5 w-5 flex items-center justify-center font-bold text-xs">TT</div>
              </Button>
            </div>
            
            {/* Developer Credits */}
            <div className="pt-4 border-t border-primary/20">
              <p className="text-sm text-foreground-muted">
                Website developed by<br />
                <span className="text-primary font-medium">Abenezer Ketema</span> (Frontend)<br />
                <span className="text-primary font-medium">Robel Assefa</span> (Backend)
              </p>
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