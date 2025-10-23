import { useState } from "react";
import { Heart, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import parisCouple1 from "@/assets/paris-couple-1.jpg";
import parisCouple2 from "@/assets/paris-couple-2.jpg";
import parisCouple3 from "@/assets/paris-couple-3.jpg";
import parisCouple4 from "@/assets/paris-couple-4.jpg";

const parisStories = [
  {
    id: 1,
    image: parisCouple1,
    couple: "Emma & Lucas",
    location: "Eiffel Tower, Paris",
    photographer: "Sophie Laurent",
    story: "We captured their engagement at golden hour beneath the iconic Eiffel Tower. The way they looked at each other reminded me why I chose this profession – to immortalize love in the world's most romantic city.",
    date: "September 2025"
  },
  {
    id: 2,
    image: parisCouple2,
    couple: "Aria & James",
    location: "Café de Flore, Paris",
    photographer: "Pierre Dubois",
    story: "An intimate morning session at one of Paris's legendary cafés. Their story began here five years ago, and returning to capture their anniversary was pure magic.",
    date: "August 2025"
  },
  {
    id: 3,
    image: parisCouple3,
    couple: "Mia & Noah",
    location: "Pont des Arts, Paris",
    photographer: "Claire Moreau",
    story: "Sunset along the Seine River created the perfect backdrop for this couple's love story. Every photograph tells a chapter of their journey together in the City of Light.",
    date: "October 2025"
  },
  {
    id: 4,
    image: parisCouple4,
    couple: "Olivia & Ethan",
    location: "Montmartre, Paris",
    photographer: "Antoine Bernard",
    story: "The artistic charm of Montmartre perfectly complemented their creative souls. Photographing their connection against cobblestone streets and Parisian architecture was a dream.",
    date: "July 2025"
  }
];

const ParisPhotographers = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-background via-romantic-gold/5 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-romantic-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-rose-gold/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-romantic-gold" />
            <p className="text-romantic-gold font-sans text-xs sm:text-sm tracking-widest uppercase">
              Stories from Paris
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-romantic-dark mb-4 sm:mb-6 px-4">
            Captured by Paris Photographers
          </h2>
          <p className="text-muted-foreground font-sans text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Authentic love stories immortalized by the finest photographers in the City of Love
          </p>
        </div>

        {/* Stories Carousel */}
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {parisStories.map((story, index) => (
              <CarouselItem key={story.id} className="basis-full md:basis-1/2">
                <div
                  className="group relative overflow-hidden rounded-3xl shadow-elegant hover:shadow-[0_0_40px_rgba(212,175,135,0.5)] transition-elegant mx-2 bg-white animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredId(story.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={story.image}
                      alt={`${story.couple} photographed in ${story.location}`}
                      className="w-full h-full object-cover transition-elegant group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-elegant" />
                    
                    {/* Location Badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-1 sm:gap-2">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-romantic-gold" />
                      <span className="text-romantic-dark text-xs sm:text-sm font-sans font-medium">
                        Paris
                      </span>
                    </div>

                    {/* Heart Icon */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 bg-romantic-gold/90 backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-elegant group-hover:scale-110">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" />
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-romantic-dark mb-1 sm:mb-2 group-hover:text-romantic-gold transition-colors">
                        {story.couple}
                      </h3>
                      <p className="text-romantic-gold/80 font-sans text-xs sm:text-sm flex items-center gap-2">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        {story.location}
                      </p>
                    </div>

                    <p className={`text-muted-foreground font-sans text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 transition-elegant ${
                      hoveredId === story.id ? 'opacity-100' : 'opacity-90'
                    }`}>
                      "{story.story}"
                    </p>

                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-romantic-dark/10">
                      <div>
                        <p className="text-romantic-dark font-sans font-medium text-xs sm:text-sm">
                          {story.photographer}
                        </p>
                        <p className="text-muted-foreground font-sans text-[10px] sm:text-xs">
                          Paris Photographer
                        </p>
                      </div>
                      <p className="text-romantic-gold font-sans text-xs sm:text-sm">
                        {story.date}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex left-2 md:left-4" />
          <CarouselNext className="hidden md:flex right-2 md:right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default ParisPhotographers;
