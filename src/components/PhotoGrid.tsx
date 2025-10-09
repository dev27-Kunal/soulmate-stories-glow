import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";
import photo7 from "@/assets/photo-7.jpg";
import photo8 from "@/assets/photo-8.jpg";
import photo9 from "@/assets/photo-9.jpg";

const photos = [
  { id: 1, src: photo1, caption: "Vogue Feature — August 2025", featured: true },
  { id: 2, src: photo2, caption: "Behind the Scenes", featured: false },
  { id: 3, src: photo3, caption: "Golden Hour Editorial", featured: true },
  { id: 4, src: photo4, caption: "Luxury Wedding — September", featured: false },
  { id: 5, src: photo5, caption: "Intimate Moments", featured: true },
  { id: 6, src: photo6, caption: "Urban Love Story", featured: false },
  { id: 7, src: photo7, caption: "Destination Romance", featured: true },
  { id: 8, src: photo8, caption: "Timeless Elegance", featured: false },
  { id: 9, src: photo9, caption: "Grand Celebration", featured: true },
];

const PhotoGrid = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-romantic-dark">
            Love Story Gallery
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Editorial photography celebrating the beauty of authentic connection
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="group relative aspect-square overflow-hidden rounded-xl shadow-soft hover:shadow-elegant transition-elegant cursor-pointer"
            >
              {/* Image */}
              <img 
                src={photo.src} 
                alt={photo.caption}
                className="w-full h-full object-cover transition-elegant group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-elegant">
                <p className="text-lg font-serif italic">{photo.caption}</p>
                {photo.featured && (
                  <span className="inline-block mt-2 text-xs font-sans font-semibold tracking-wider bg-rose-gold/20 backdrop-blur-sm px-3 py-1 rounded-full border border-rose-gold/30">
                    FEATURED
                  </span>
                )}
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-xl transition-elegant pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Submit Story CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('share-story')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-rose-gold font-sans font-semibold text-lg hover:text-warm-gold transition-elegant inline-flex items-center gap-2 group"
          >
            Submit Your Love Story
            <span className="transform group-hover:translate-x-1 transition-elegant">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
