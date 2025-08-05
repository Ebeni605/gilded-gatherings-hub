import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuCarousel from "@/components/MenuCarousel";
import MeetingHallModal from "@/components/MeetingHallModal";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <MenuCarousel />
        <MeetingHallModal />
        <Footer />
        <ChatBot />
      </div>
    </div>
  );
};

export default Index;
