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
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-elegant mb-8">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-[600px] object-cover transition-smooth"
            />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Navigation Arrows at Bottom */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="bg-black/80 hover:bg-primary hover:text-black text-primary border border-primary/30 h-12 w-12 backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="bg-black/80 hover:bg-primary hover:text-black text-primary border border-primary/30 h-12 w-12 backdrop-blur-sm"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Dish Information */}
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-4">
              {currentItem.title}
            </h3>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              {currentItem.description}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {menuItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex 
                    ? 'bg-primary shadow-glow' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCarousel;