const PressMentions = () => {
  const publications = [
    { name: "VOGUE", width: "w-28" },
    { name: "ELLE", width: "w-20" },
    { name: "FORBES", width: "w-32" },
    { name: "HARPER'S BAZAAR", width: "w-40" },
    { name: "GQ", width: "w-16" },
    { name: "VANITY FAIR", width: "w-36" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-sm font-sans font-semibold tracking-[0.3em] text-muted-foreground mb-2">
            AS SEEN IN
          </p>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {publications.map((pub, index) => (
            <div 
              key={index}
              className="opacity-40 hover:opacity-70 transition-elegant cursor-pointer"
            >
              <div className={`${pub.width} h-8 flex items-center justify-center`}>
                <span className="font-serif font-bold text-2xl tracking-tight text-romantic-dark">
                  {pub.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressMentions;
