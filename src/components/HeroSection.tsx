import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/95062c7d-275a-4648-b44f-bfaaab0b29ca.png')"
        }}
      />
      
      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-slide-up">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary mb-6 text-shadow-gold">
          Mafi Restaurant
        </h1>
        <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-2xl mx-auto font-light">
          Experience luxury dining with exquisite cuisine and elegant atmosphere in the heart of the city
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="gold" size="lg" className="text-lg px-8 py-4">
            Explore Menu
          </Button>
          <Button variant="luxury" size="lg" className="text-lg px-8 py-4">
            Book Meeting Hall
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;