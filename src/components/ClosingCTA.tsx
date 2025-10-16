import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Image } from "lucide-react";
import BrandFilmModal from "@/components/BrandFilmModal";
import MediaGalleryModal from "@/components/MediaGalleryModal";

const ClosingCTA = () => {
  const [isBrandFilmOpen, setIsBrandFilmOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Bokeh Background Effect */}
      <div className="absolute inset-0 gradient-romantic">
        <div className="absolute top-10 left-10 w-64 h-64 bg-rose-gold/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-warm-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cream/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Quote */}
        <blockquote className="mb-8 sm:mb-10 md:mb-12">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif italic text-romantic-dark leading-relaxed mb-4 sm:mb-6 px-4">
            "Discover the Soulmate X Story — Where Vision Meets Emotion."
          </p>
          <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-gold mx-auto rounded-full" />
        </blockquote>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button 
            size="lg"
            onClick={() => setIsBrandFilmOpen(true)}
            className="gradient-gold hover:shadow-elegant transition-elegant rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-sans font-semibold w-full sm:w-auto sm:min-w-[200px]"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" />
            Watch Brand Film
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={() => setIsGalleryOpen(true)}
            className="border-2 border-romantic-dark text-romantic-dark hover:bg-romantic-dark hover:text-white transition-elegant rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-sans font-semibold w-full sm:w-auto sm:min-w-[200px]"
          >
            <Image className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Explore Media Gallery
          </Button>
        </div>

        {/* Modals */}
        <BrandFilmModal open={isBrandFilmOpen} onOpenChange={setIsBrandFilmOpen} />
        <MediaGalleryModal open={isGalleryOpen} onOpenChange={setIsGalleryOpen} />

        {/* Decorative Light Flares */}
        <div className="absolute -top-10 left-1/4 w-2 h-2 bg-warm-gold rounded-full blur-sm opacity-60 animate-pulse" />
        <div className="absolute -bottom-10 right-1/3 w-3 h-3 bg-rose-gold rounded-full blur-sm opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default ClosingCTA;
