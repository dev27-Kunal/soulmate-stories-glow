import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const BrandFilmModal = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-romantic-dark/20">
        <DialogHeader className="sr-only">
          <DialogTitle>Soulmate X Brand Film</DialogTitle>
        </DialogHeader>
        
        <div className="relative aspect-video w-full bg-black">
          {/* Video Player - Replace with actual video URL */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
            title="Soulmate X Brand Film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BrandFilmModal;
