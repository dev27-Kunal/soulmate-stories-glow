import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Upload } from "lucide-react";
import { toast } from "sonner";

interface ShareStoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ShareStoryModal = ({ open, onOpenChange }: ShareStoryModalProps) => {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    story: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    toast.success("Your love story has been submitted!", {
      description: "We'll review it and be in touch soon.",
    });
    
    // Reset form
    setFormData({ names: "", email: "", story: "", location: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-serif text-romantic-dark flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-gold fill-rose-gold" />
            Share Your Love Story
          </DialogTitle>
          <DialogDescription className="text-base font-sans">
            Your story could inspire millions. Share your journey with the Soulmate X community.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="names" className="font-sans font-semibold">
              Your Names *
            </Label>
            <Input
              id="names"
              placeholder="e.g., Alex & Jordan"
              value={formData.names}
              onChange={(e) => setFormData({ ...formData, names: e.target.value })}
              required
              className="font-sans"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-sans font-semibold">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="font-sans"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="font-sans font-semibold">
              Location
            </Label>
            <Input
              id="location"
              placeholder="City, Country"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="font-sans"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="story" className="font-sans font-semibold">
              Your Story *
            </Label>
            <Textarea
              id="story"
              placeholder="Tell us about your love story, how you met, what makes your relationship special..."
              value={formData.story}
              onChange={(e) => setFormData({ ...formData, story: e.target.value })}
              required
              className="min-h-[150px] font-sans"
            />
          </div>

          <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center hover:border-rose-gold transition-elegant cursor-pointer">
            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm font-sans text-muted-foreground">
              Upload photos or videos (optional)
            </p>
            <p className="text-xs font-sans text-muted-foreground mt-1">
              Click to browse files
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 font-sans"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 gradient-gold font-sans font-semibold"
            >
              Submit Your Story
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ShareStoryModal;
