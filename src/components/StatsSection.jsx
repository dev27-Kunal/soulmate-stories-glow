import { Heart, Users, Globe } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Heart,
      value: "10,000+",
      label: "Love Stories Shared",
    },
    {
      icon: Users,
      value: "2M+",
      label: "Community Members",
    },
    {
      icon: Globe,
      value: "150+",
      label: "Countries Worldwide",
    },
  ];

  return (
    <section id="share-story" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-romantic-dark">
            A Global Community
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-sans max-w-2xl mx-auto px-4">
            Join thousands of couples sharing their unique love stories with the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-elegant group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-gold mb-3 sm:mb-4 group-hover:scale-110 transition-elegant">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-romantic-dark mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
