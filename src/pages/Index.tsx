import HeroSection from "@/components/HeroSection";
import MenuCarousel from "@/components/MenuCarousel";
import MeetingHallBooking from "@/components/MeetingHallBooking";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MenuCarousel />
      <MeetingHallBooking />
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
