import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "LOVE STORIES",
    "RELATIONSHIPS",
    "LIFESTYLE",
    "TRAVEL",
    "CULTURE",
    "ENTERTAINMENT"
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-tight">
            LOVE GAZETTE
          </h1>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="default" size="sm" className="hidden sm:inline-flex">
              SUBSCRIBE
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation Categories */}
        <nav className="hidden lg:flex items-center justify-center gap-6 py-3 border-t border-border">
          {categories.map((category) => (
            <button
              key={category}
              className="text-sm font-semibold tracking-wide hover:text-primary transition-colors"
            >
              {category}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="px-4 py-4 space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                className="block w-full text-left px-3 py-2 text-sm font-semibold tracking-wide hover:bg-secondary transition-colors rounded-md"
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
