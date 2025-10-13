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
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-romantic-gold/5 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-romantic-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-rose-gold/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-romantic-gold" />
            <p className="text-romantic-gold font-sans text-sm tracking-widest uppercase">
              Stories from Paris
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-romantic-dark mb-6">
            Captured by Paris Photographers
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            Authentic love stories immortalized by the finest photographers in the City of Love
          </p>
        </div>

        {/* Stories Carousel */}
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {parisStories.map((story, index) => (
              <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/2">
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
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-romantic-gold" />
                      <span className="text-romantic-dark text-sm font-sans font-medium">
                        Paris
                      </span>
                    </div>

                    {/* Heart Icon */}
                    <div className="absolute top-6 left-6 bg-romantic-gold/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transition-elegant group-hover:scale-110">
                      <Heart className="w-6 h-6 text-white" fill="currentColor" />
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-3xl font-serif text-romantic-dark mb-2 group-hover:text-romantic-gold transition-colors">
                        {story.couple}
                      </h3>
                      <p className="text-romantic-gold/80 font-sans text-sm flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {story.location}
                      </p>
                    </div>

                    <p className={`text-muted-foreground font-sans leading-relaxed mb-6 transition-elegant ${
                      hoveredId === story.id ? 'opacity-100' : 'opacity-90'
                    }`}>
                      "{story.story}"
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-romantic-dark/10">
                      <div>
                        <p className="text-romantic-dark font-sans font-medium text-sm">
                          {story.photographer}
                        </p>
                        <p className="text-muted-foreground font-sans text-xs">
                          Paris Photographer
                        </p>
                      </div>
                      <p className="text-romantic-gold font-sans text-sm">
                        {story.date}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default ParisPhotographers;
