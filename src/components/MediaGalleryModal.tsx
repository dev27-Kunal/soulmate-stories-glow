import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";
import photo7 from "@/assets/photo-7.jpg";
import photo8 from "@/assets/photo-8.jpg";
import photo9 from "@/assets/photo-9.jpg";

interface MediaGalleryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const galleryPhotos = [
  { id: 1, src: photo1, caption: "Vogue Feature – August 2025" },
  { id: 2, src: photo2, caption: "Behind the Scenes" },
  { id: 3, src: photo3, caption: "Elle Magazine – Spring Collection" },
  { id: 4, src: photo4, caption: "Intimate Moments" },
  { id: 5, src: photo5, caption: "Editorial Excellence" },
  { id: 6, src: photo6, caption: "Love in Motion" },
  { id: 7, src: photo7, caption: "Timeless Romance" },
  { id: 8, src: photo8, caption: "Modern Love Story" },
  { id: 9, src: photo9, caption: "Captured Emotions" },
];

const MediaGalleryModal = ({ open, onOpenChange }: MediaGalleryModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl p-8 bg-gradient-to-br from-cream to-rose-gold/10 border-romantic-dark/20">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-4xl font-serif text-romantic-dark text-center">
            Media Gallery
          </DialogTitle>
          <p className="text-center text-muted-foreground font-sans mt-2">
            Explore our collection of romantic moments
          </p>
        </DialogHeader>
        
        <Carousel className="w-full">
          <CarouselContent>
            {galleryPhotos.map((photo) => (
              <CarouselItem key={photo.id}>
                <div className="relative group">
                  <div className="aspect-[16/10] relative overflow-hidden rounded-xl shadow-elegant">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover transition-elegant group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-xl font-sans font-medium">
                        {photo.caption}
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
      </DialogContent>
    </Dialog>
  );
};

export default MediaGalleryModal;
