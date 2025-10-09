import { Button } from "@/components/ui/button";
import { Play, Image } from "lucide-react";

const ClosingCTA = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Bokeh Background Effect */}
      <div className="absolute inset-0 gradient-romantic">
        <div className="absolute top-10 left-10 w-64 h-64 bg-rose-gold/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-warm-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cream/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Quote */}
        <blockquote className="mb-12">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-romantic-dark leading-relaxed mb-6">
            "Discover the Soulmate X Story — Where Vision Meets Emotion."
          </p>
          <div className="w-16 h-1 bg-gradient-gold mx-auto rounded-full" />
        </blockquote>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="gradient-gold hover:shadow-elegant transition-elegant rounded-full px-8 py-6 text-lg font-sans font-semibold min-w-[200px]"
          >
            <Play className="w-5 h-5 mr-2" fill="currentColor" />
            Watch Brand Film
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-romantic-dark text-romantic-dark hover:bg-romantic-dark hover:text-white transition-elegant rounded-full px-8 py-6 text-lg font-sans font-semibold min-w-[200px]"
          >
            <Image className="w-5 h-5 mr-2" />
            Explore Media Gallery
          </Button>
        </div>

        {/* Decorative Light Flares */}
        <div className="absolute -top-10 left-1/4 w-2 h-2 bg-warm-gold rounded-full blur-sm opacity-60 animate-pulse" />
        <div className="absolute -bottom-10 right-1/3 w-3 h-3 bg-rose-gold rounded-full blur-sm opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default ClosingCTA;
