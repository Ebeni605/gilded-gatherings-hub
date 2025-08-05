import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    id: 1,
    title: "Mixed Grill",
    description: "mixed lamb, chicken, sausage, steak served with roasted tomatoes and french fries topped with red wine sauce",
    image: "/lovable-uploads/e46e5316-7297-47db-8121-7fe1edd9bebc.png"
  },
  {
    id: 2,
    title: "Roast Chicken",
    description: "roasted boneless chicken legs served with french fries and seasonal vegetables topped with french fries or tomato garlic butter sauce",
    image: "/lovable-uploads/71cc6eba-1d9e-4c9a-85ab-1a752ea25432.png"
  },
  {
    id: 3,
    title: "Beef or Chicken Fajita",
    description: "mixed lamb or chicken sausage, steak served with roasted tomatoes and french fries topped with red wine sauce",
    image: "/lovable-uploads/940cdfeb-04fd-4f5b-bcf3-4e9014f00fd3.png"
  },
  {
    id: 4,
    title: "Rolled Beef",
    description: "mafi beef rolle stuffed with ricotta cheese and spinach served with mashed potatoes and seasonal vegetables",
    image: "/lovable-uploads/1cbe3168-0c8c-4904-bdfa-8ac4b06384bf.png"
  },
  {
    id: 5,
    title: "Fish & Chips",
    description: "fried tilapia served with french fries and tartar sauce",
    image: "/lovable-uploads/55e56740-fc9f-474b-b07e-fb27d975b8e6.png"
  },
  {
    id: 6,
    title: "Fish Cutlet",
    description: "breaded fish fillet topped with sweet or sour sauce served with mashed potatoes and seasonal vegetables",
    image: "/lovable-uploads/fcbc4740-3755-45df-9921-ad6edb3ea55a.png"
  },
  {
    id: 7,
    title: "Grilled Fish",
    description: "grilled catch of the trillet of tilapia or nile perch served with spinach and parsley potato with garlic lemon butter sauce or sweet and sour sauce",
    image: "/lovable-uploads/1132423c-2f5b-4405-9bc5-c2889ca3d0d0.png"
  },
  {
    id: 8,
    title: "Stuffed Chicken Breast",
    description: "spinach and ricotta cheese stuffed chicken breast served with curry rice and seasonal vegetables topped with creamy white wine sauce",
    image: "/lovable-uploads/ddae9436-950e-4dae-b2db-4ecc8c9c3090.png"
  }
];

const MenuCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoSliding) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoSliding]);

  const nextSlide = () => {
    setIsAutoSliding(false); // Pause auto-slide when user interacts
    setCurrentIndex((prevIndex) => 
      prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1
    );
    // Resume auto-slide after 10 seconds
    setTimeout(() => setIsAutoSliding(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoSliding(false); // Pause auto-slide when user interacts
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1
    );
    // Resume auto-slide after 10 seconds
    setTimeout(() => setIsAutoSliding(true), 10000);
  };

  const currentItem = menuItems[currentIndex];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            Our Signature Menu
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Discover our carefully crafted dishes, each prepared with the finest ingredients and presented with elegance
          </p>
        </div>

        {/* Minimalist Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* High-Quality Image Display */}
          <div className="relative overflow-hidden rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.3)]">
            <div className="aspect-[16/10] relative">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                style={{ filter: 'brightness(1.05) contrast(1.1)' }}
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Sleek Navigation Icons */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="group bg-black/40 hover:bg-black/60 text-primary border border-primary/30 h-16 w-16 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                >
                  <ChevronLeft className="h-7 w-7 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="group bg-black/40 hover:bg-black/60 text-primary border border-primary/30 h-16 w-16 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                >
                  <ChevronRight className="h-7 w-7 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                </Button>
              </div>
              
              {/* Auto-slide indicator */}
              <div className="absolute top-6 right-6">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isAutoSliding ? 'bg-primary shadow-[0_0_10px_rgba(212,175,55,0.6)] animate-pulse' : 'bg-white/30'
                }`}></div>
              </div>
            </div>
          </div>

          {/* Minimalist Content */}
          <div className="text-center mt-10 space-y-6">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary transition-all duration-500">
              {currentItem.title}
            </h3>
            <div className="w-24 h-0.5 bg-primary mx-auto transition-all duration-500"></div>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed opacity-90">
              {currentItem.description}
            </p>
          </div>

          {/* Modern Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-12">
            {menuItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoSliding(false);
                  setTimeout(() => setIsAutoSliding(true), 10000);
                }}
                className={`relative transition-all duration-500 ease-out ${
                  index === currentIndex 
                    ? 'w-12 h-3 bg-primary shadow-[0_0_20px_rgba(212,175,55,0.5)]' 
                    : 'w-3 h-3 bg-white/30 hover:bg-primary/50 hover:scale-125'
                } rounded-full group`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-primary rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCarousel;