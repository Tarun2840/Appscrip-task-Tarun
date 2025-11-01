import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="border-b bg-muted/50">
        <div className="container-plp py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                Lorem ipsum dolor
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                Lorem ipsum dolor
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                Lorem ipsum dolor
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-plp py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded" />
            <h1 className="text-2xl font-bold">LOGO</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#shop" className="text-sm font-medium hover:text-accent transition-smooth">
              SHOP
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-accent transition-smooth">
              SKILLS
            </a>
            <a href="#stories" className="text-sm font-medium hover:text-accent transition-smooth">
              STORIES
            </a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-smooth">
              ABOUT
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-smooth">
              CONTACT US
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] text-accent-foreground flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <User className="h-5 w-5" />
            </Button>
            <select className="hidden md:block text-sm border-0 bg-transparent focus:outline-none">
              <option>ENG</option>
              <option>ESP</option>
              <option>FRA</option>
            </select>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container-plp py-4 flex flex-col gap-3">
            <a href="#shop" className="py-2 text-sm font-medium hover:text-accent transition-smooth">
              SHOP
            </a>
            <a href="#skills" className="py-2 text-sm font-medium hover:text-accent transition-smooth">
              SKILLS
            </a>
            <a href="#stories" className="py-2 text-sm font-medium hover:text-accent transition-smooth">
              STORIES
            </a>
            <a href="#about" className="py-2 text-sm font-medium hover:text-accent transition-smooth">
              ABOUT
            </a>
            <a href="#contact" className="py-2 text-sm font-medium hover:text-accent transition-smooth">
              CONTACT US
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
