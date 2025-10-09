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
    <section id="share-story" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-romantic-dark">
            A Global Community
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Join thousands of couples sharing their unique love stories with the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-elegant group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-4 group-hover:scale-110 transition-elegant">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-romantic-dark mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-sans">
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
