import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const MeetingHallBooking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    date: "",
    time: "",
    purpose: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted",
      description: "We'll contact you shortly to confirm your meeting hall reservation.",
    });
    setFormData({
      name: "",
      organization: "",
      date: "",
      time: "",
      purpose: ""
    });
  };

  return (
    <section className="py-20 bg-background-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Meeting Hall Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src="/lovable-uploads/75f0a2e1-ceb5-407b-bd2a-4b02d7c7d5e0.png"
                alt="Mafi Restaurant Meeting Hall"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 gradient-subtle" />
            </div>
          </div>

          {/* Booking Form */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <div className="max-w-lg">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
                Book Our Meeting Hall
              </h2>
              <p className="text-xl text-foreground-muted mb-8">
                Host your corporate events, meetings, and special gatherings in our elegant meeting hall with state-of-the-art facilities.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-primary font-medium">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background-subtle border-primary/20 text-foreground-accent focus:border-primary mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="organization" className="text-primary font-medium">Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    required
                    className="bg-background-subtle border-primary/20 text-foreground-accent focus:border-primary mt-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-primary font-medium">Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="bg-background-subtle border-primary/20 text-foreground-accent focus:border-primary mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-primary font-medium">Time</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="bg-background-subtle border-primary/20 text-foreground-accent focus:border-primary mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="purpose" className="text-primary font-medium">Purpose of Meeting</Label>
                  <Textarea
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-background-subtle border-primary/20 text-foreground-accent focus:border-primary mt-2"
                    placeholder="Describe the nature of your event or meeting..."
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full text-lg py-6">
                  Book Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingHallBooking;