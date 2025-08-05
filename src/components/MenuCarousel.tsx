import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    id: 1,
    title: "Mixed Grill",
    description: "mixed lamb, chicken, sausage, steak served with roasted tomatoes and french fries topped with red wine sauce",
    image: "/lovable-uploads/78133545-421e-4a8e-ac65-8a447aa0b859.png"
  },
  {
    id: 2,
    title: "Roast Chicken",
    description: "roasted boneless chicken legs served with french fries and seasonal vegetables topped with french fries or tomato garlic butter sauce",
    image: "/lovable-uploads/61d6d6c5-8238-4a3c-b5c9-fd3c49b3f779.png"
  },
  {
    id: 3,
    title: "Beef or Chicken Fajita",
    description: "mixed lamb or chicken sausage, steak served with roasted tomatoes and french fries topped with red wine sauce",
    image: "/lovable-uploads/a810149e-ae98-4cee-af8b-ba8e19db37a3.png"
  },
  {
    id: 4,
    title: "Rolled Beef",
    description: "mafi beef rolle stuffed with ricotta cheese and spinach served with mashed potatoes and seasonal vegetables",
    image: "/lovable-uploads/c551f453-8a51-402a-b15a-2a6e1921134c.png"
  },
  {
    id: 5,
    title: "Fish & Chips",
    description: "fried tilapia served with french fries and tartar sauce",
    image: "/lovable-uploads/0329d027-27cd-4a44-8beb-33153459d535.png"
  },
  {
    id: 6,
    title: "Fish Cutlet",
    description: "breaded fish fillet topped with sweet or sour sauce served with mashed potatoes and seasonal vegetables",
    image: "/lovable-uploads/bebfc324-22c4-45ad-8bb2-3e8ced661f98.png"
  },
  {
    id: 7,
    title: "Grilled Fish",
    description: "grilled catch of the trillet of tilapia or nile perch served with spinach and parsley potato with garlic lemon butter sauce or sweet and sour sauce",
    image: "/lovable-uploads/ad1b2430-fe96-4241-8ec6-e55473632936.png"
  },
  {
    id: 8,
    title: "Stuffed Chicken Breast",
    description: "spinach and ricotta cheese stuffed chicken breast served with curry rice and seasonal vegetables topped with creamy white wine sauce",
    image: "/lovable-uploads/20dfb7ad-d4d6-49b5-b47f-6a97b765ffc5.png"
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
              className="w-full h-[600px] object-cover transition-smooth filter blur-sm"
            />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Navigation Arrows at Bottom */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="bg-background/80 hover:bg-primary hover:text-primary-foreground text-primary border border-primary/20 h-12 w-12 backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="bg-background/80 hover:bg-primary hover:text-primary-foreground text-primary border border-primary/20 h-12 w-12 backdrop-blur-sm"
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