import { Play } from "lucide-react";
import { useState } from "react";
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
    <section className="py-24 px-6 bg-gradient-to-b from-background via-cream/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-romantic-gold font-sans text-sm tracking-widest uppercase mb-4">
            Latest Updates
          </p>
          <h2 className="text-5xl md:text-6xl font-serif text-romantic-dark mb-6">
            Events & Highlights
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            Exclusive content featuring celebrity endorsements, app launches, and community celebrations
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventVideos.map((video, index) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-[0_0_40px_rgba(212,175,135,0.4)] transition-elegant animate-fade-in"
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
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center transition-elegant group-hover:scale-110 group-hover:bg-romantic-gold group-hover:shadow-[0_0_30px_rgba(212,175,135,0.6)]">
                    <Play className="w-8 h-8 text-romantic-dark ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-sans">{video.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-romantic-gold/90 backdrop-blur-sm px-4 py-1 rounded-full">
                  <span className="text-romantic-dark text-xs font-sans font-semibold tracking-wide uppercase">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-elegant">
                <h3 className="text-white text-2xl font-serif mb-2 group-hover:text-romantic-gold transition-colors">
                  {video.title}
                </h3>
                <p className={`text-white/80 font-sans transition-elegant ${
                  hoveredId === video.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventVideos;
