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
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  },
  {
    id: 2,
    title: "The Art of Connection",
    description: "An intimate journey through meaningful relationships",
    thumbnail: video2,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: 3,
    title: "Passion Meets Purpose",
    description: "When two souls unite for something greater",
    thumbnail: video3,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-romantic-dark">
            Featured Stories
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-sans max-w-2xl mx-auto px-4">
            Cinematic love stories that inspire and move hearts around the globe
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-elegant">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videos.map((video, index) => (
                <div key={video.id} className="min-w-full relative group">
                  <div className="aspect-video relative overflow-hidden">
                    {isPlaying && index === currentIndex ? (
                      // Video Player
                      <video
                        src={video.videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        poster={video.thumbnail}
                        onEnded={() => setIsPlaying(false)}
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      // Thumbnail with Play Button
                      <>
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover transition-elegant group-hover:scale-105"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-elegant">
                          <button 
                            onClick={handlePlay}
                            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center hover:bg-white/30 transition-elegant"
                            aria-label={`Play ${video.title}`}
                          >
                            <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white ml-0.5 sm:ml-1" fill="white" />
                          </button>
                        </div>
                      </>
                    )}

                    {/* Text Content - Always visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{video.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg font-sans opacity-90">
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
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-elegant hover:scale-110 transition-elegant"
            onClick={prev}
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-elegant hover:scale-110 transition-elegant"
            onClick={next}
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 sm:h-3 rounded-full transition-elegant ${
                  index === currentIndex 
                    ? 'bg-rose-gold w-6 sm:w-8' 
                    : 'w-2 sm:w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
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
