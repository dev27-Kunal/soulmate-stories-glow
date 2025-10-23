import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const FlashNews = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const flashNews = [
    {
      title: "Breaking: Celebrity Couple Announces Engagement in Paris",
      category: "CELEBRITY NEWS",
    },
    {
      title: "Trending: Top 10 Romantic Destinations for 2025",
      category: "TRAVEL",
    },
    {
      title: "Exclusive: Behind the Scenes of Luxury Wedding Planning",
      category: "LIFESTYLE",
    },
  ];

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % flashNews.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isVisible, flashNews.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-40 w-80 animate-slide-in-right">
      <div className="bg-card border-2 border-primary shadow-elegant rounded-lg overflow-hidden">
        <div className="bg-primary px-4 py-2 flex items-center justify-between">
          <span className="text-xs font-bold text-primary-foreground tracking-wider">
            {flashNews[currentIndex].category}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4 bg-gradient-to-br from-card to-secondary/20">
          <p className="text-sm font-semibold leading-tight">
            {flashNews[currentIndex].title}
          </p>
          <div className="flex gap-1 mt-3">
            {flashNews.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashNews;
