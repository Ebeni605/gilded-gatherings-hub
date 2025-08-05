import { useState } from "react";
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1
    );
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

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto group">
          {/* Professional Menu Card */}
          <div className="bg-background rounded-3xl shadow-2xl overflow-hidden border border-primary/10 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:border-primary/30">
            {/* Card Image */}
            <div className="relative h-[500px] overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/50" />
              
              {/* Elegant Frame Overlay */}
              <div className="absolute inset-4 border-2 border-primary/30 rounded-2xl opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
              
              {/* Navigation Arrows */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-90 hover:opacity-100 transition-opacity duration-300">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="bg-black/80 hover:bg-primary hover:text-black text-primary border-2 border-primary/50 h-14 w-14 backdrop-blur-md rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="bg-black/80 hover:bg-primary hover:text-black text-primary border-2 border-primary/50 h-14 w-14 backdrop-blur-md rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8 space-y-6 bg-gradient-to-b from-background to-background/95">
              {/* Dish Title */}
              <div className="text-center border-b border-primary/20 pb-4">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3 transition-all duration-300 group-hover:text-primary-glow">
                  {currentItem.title}
                </h3>
                <div className="w-20 h-0.5 bg-primary mx-auto transition-all duration-500 group-hover:w-32 group-hover:shadow-glow"></div>
              </div>
              
              {/* Description */}
              <p className="text-lg text-foreground-muted text-center leading-relaxed max-w-3xl mx-auto transition-all duration-300 group-hover:text-foreground">
                {currentItem.description}
              </p>
              
              {/* Decorative Elements */}
              <div className="flex justify-center space-x-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center space-x-4 mt-10">
            {menuItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-primary shadow-[0_0_15px_rgba(212,175,55,0.6)] scale-125' 
                    : 'w-3 h-3 bg-muted hover:bg-primary/60 hover:scale-110'
                } rounded-full`}
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