import { Play } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";

const eventVideos = [
  {
    id: 1,
    thumbnail: event1,
    title: "Soulmate X Global Launch Event",
    description: "Celebrating love stories worldwide at our exclusive brand launch",
    duration: "5:24",
    category: "Event"
  },
  {
    id: 2,
    thumbnail: event2,
    title: "Celebrity Testimonial: A Love Story",
    description: "Renowned actor shares their journey with Soulmate X",
    duration: "3:45",
    category: "Promotional"
  },
  {
    id: 3,
    thumbnail: event3,
    title: "App Feature Spotlight",
    description: "Discover the innovative features connecting hearts globally",
    duration: "4:12",
    category: "News"
  },
  {
    id: 4,
    thumbnail: event4,
    title: "Exclusive Interview Series",
    description: "Influencers discuss the future of modern romance",
    duration: "6:30",
    category: "Promotional"
  }
];

const EventVideos = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-background via-cream/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 animate-fade-in">
          <p className="text-romantic-gold font-sans text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">
            Latest Updates
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-romantic-dark mb-3 sm:mb-4 md:mb-6 px-4">
            Events & Highlights
          </h2>
          <p className="text-muted-foreground font-sans text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Exclusive content featuring celebrity endorsements, app launches, and community celebrations
          </p>
        </div>

        {/* Video Carousel */}
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-2 sm:-ml-4">
            {eventVideos.map((video, index) => (
              <CarouselItem key={video.id} className="pl-2 sm:pl-4 basis-full md:basis-1/2">
                <div
                  className="group relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-elegant hover:shadow-[0_0_40px_rgba(212,175,135,0.4)] transition-elegant animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredId(video.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center transition-elegant group-hover:scale-110 group-hover:bg-romantic-gold group-hover:shadow-[0_0_30px_rgba(212,175,135,0.6)]">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-romantic-dark ml-0.5 sm:ml-1" fill="currentColor" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-black/60 backdrop-blur-sm px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-full">
                      <span className="text-white text-[10px] sm:text-xs md:text-sm font-sans">{video.duration}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 bg-romantic-gold/90 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1 rounded-full">
                      <span className="text-romantic-dark text-[10px] sm:text-xs font-sans font-semibold tracking-wide uppercase">
                        {video.category}
                      </span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 transition-elegant">
                    <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-serif mb-1 sm:mb-1.5 md:mb-2 group-hover:text-romantic-gold transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className={`text-white/80 font-sans text-xs sm:text-sm md:text-base transition-elegant line-clamp-2 ${
                      hoveredId === video.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      {video.description}
                    </p>
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

export default EventVideos;
