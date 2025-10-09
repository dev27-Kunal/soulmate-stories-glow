import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import video1 from "@/assets/video-1.jpg";
import video2 from "@/assets/video-2.jpg";
import video3 from "@/assets/video-3.jpg";

const videos = [
  {
    id: 1,
    title: "Innovation in Motion",
    description: "Discover how modern love breaks boundaries",
    thumbnail: video1,
  },
  {
    id: 2,
    title: "The Art of Connection",
    description: "An intimate journey through meaningful relationships",
    thumbnail: video2,
  },
  {
    id: 3,
    title: "Passion Meets Purpose",
    description: "When two souls unite for something greater",
    thumbnail: video3,
  },
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-romantic-dark">
            Featured Stories
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Cinematic love stories that inspire and move hearts around the globe
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-elegant">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videos.map((video) => (
                <div key={video.id} className="min-w-full relative group">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover transition-elegant group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-elegant">
                      <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center hover:bg-white/30 transition-elegant">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </button>
                    </div>

                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-elegant">
                      <h3 className="text-3xl font-bold mb-2">{video.title}</h3>
                      <p className="text-lg opacity-0 group-hover:opacity-100 transition-elegant font-sans">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 shadow-elegant hover:scale-110 transition-elegant"
            onClick={prev}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 shadow-elegant hover:scale-110 transition-elegant"
            onClick={next}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-elegant ${
                  index === currentIndex 
                    ? 'bg-rose-gold w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
