import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo/Brand Mark */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-soft">
            <Sparkles className="w-4 h-4 text-rose-gold" />
            <span className="text-sm font-sans font-medium text-foreground tracking-wide">SOULMATE X</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="block text-romantic-dark leading-tight">
            Soulmate X
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2 bg-gradient-to-r from-rose-gold to-warm-gold bg-clip-text text-transparent">
            Publication & Media
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Stories That Move the World
        </p>

        {/* CTA Button */}
        <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="gradient-gold hover:shadow-elegant transition-elegant text-lg px-8 py-6 rounded-full font-sans font-semibold"
            onClick={() => document.getElementById('share-story')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Share Your Story
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
