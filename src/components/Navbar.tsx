import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/lovable-uploads/95062c7d-275a-4648-b44f-bfaaab0b29ca.png"
              alt="Mafi Restaurant"
              className="h-12 w-12 rounded-full object-cover border-2 border-primary"
            />
            <span className="ml-3 text-xl font-serif font-bold text-primary">Mafi Restaurant</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-primary hover:text-primary-glow transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-primary hover:text-primary-glow transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('meeting-hall')}
              className="text-primary hover:text-primary-glow transition-colors"
            >
              Meeting Hall
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-primary hover:text-primary-glow transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-primary hover:text-primary-glow"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-primary/30 animate-slide-in-right">
            <div className="py-6 space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-6 py-4 text-primary hover:text-primary-glow hover:bg-primary/10 transition-all duration-300 border-b border-primary/20"
              >
                <span className="text-lg font-medium">Home</span>
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-6 py-4 text-primary hover:text-primary-glow hover:bg-primary/10 transition-all duration-300 border-b border-primary/20"
              >
                <span className="text-lg font-medium">Menu</span>
              </button>
              <button
                onClick={() => scrollToSection('meeting-hall')}
                className="block w-full text-left px-6 py-4 text-primary hover:text-primary-glow hover:bg-primary/10 transition-all duration-300 border-b border-primary/20"
              >
                <span className="text-lg font-medium">Meeting Hall</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-6 py-4 text-primary hover:text-primary-glow hover:bg-primary/10 transition-all duration-300"
              >
                <span className="text-lg font-medium">Contact</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;