import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Hero from "@/components/Hero";
import EventVideos from "@/components/EventVideos";
import VideoCarousel from "@/components/VideoCarousel";
import ParisPhotographers from "@/components/ParisPhotographers";
import PhotoGrid from "@/components/PhotoGrid";
import PressMentions from "@/components/PressMentions";
import StatsSection from "@/components/StatsSection";
import ClosingCTA from "@/components/ClosingCTA";
import ShareStoryModal from "@/components/ShareStoryModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Share Story Button */}
      <Button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 z-50 rounded-full w-16 h-16 shadow-elegant hover:shadow-[0_0_40px_rgba(212,175,135,0.6)] gradient-gold transition-elegant group"
        size="icon"
      >
        <Heart className="w-6 h-6 group-hover:scale-110 transition-elegant" fill="currentColor" />
      </Button>

      {/* Main Content */}
      <Hero />
      <EventVideos />
      <VideoCarousel />
      <ParisPhotographers />
      <PhotoGrid />
      <PressMentions />
      <StatsSection />
      <ClosingCTA />

      {/* Share Story Modal */}
      <ShareStoryModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Index;
