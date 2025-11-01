import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FilterSidebarProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const FilterSidebar = ({ categories, selectedCategories, onCategoryChange }: FilterSidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="space-y-6">
        {/* Customizable Checkbox */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox id="customizable" />
            <Label htmlFor="customizable" className="font-medium cursor-pointer">
              CUSTOMIZABLE
            </Label>
          </div>
        </div>

        <Separator />

        {/* Categories Filter */}
        <div className="space-y-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full text-left font-semibold text-sm uppercase"
          >
            <span>Filter by Category</span>
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {isOpen && (
            <div className="space-y-3 pl-1">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="all"
                  checked={selectedCategories.length === 0}
                  onCheckedChange={() => {
                    if (selectedCategories.length > 0) {
                      selectedCategories.forEach(cat => onCategoryChange(cat));
                    }
                  }}
                />
                <Label htmlFor="all" className="text-sm cursor-pointer capitalize">
                  All Products
                </Label>
              </div>
              {categories.map((category) => (
                <div key={category} className="flex items-center gap-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => onCategoryChange(category)}
                  />
                  <Label htmlFor={category} className="text-sm cursor-pointer capitalize">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Additional Filters Placeholder */}
        <div className="space-y-4">
          <h3 className="font-semibold text-sm uppercase">Ideal For</h3>
          <p className="text-sm text-muted-foreground">All</p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold text-sm uppercase">Occasion</h3>
          <p className="text-sm text-muted-foreground">All</p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold text-sm uppercase">Work</h3>
          <p className="text-sm text-muted-foreground">All</p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold text-sm uppercase">Fabric</h3>
          <p className="text-sm text-muted-foreground">All</p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold text-sm uppercase">Segment</h3>
          <p className="text-sm text-muted-foreground">All</p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold text-sm uppercase">Suitable For</h3>
          <p className="text-sm text-muted-foreground">All</p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold text-sm uppercase">Raw Materials</h3>
          <p className="text-sm text-muted-foreground">All</p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold text-sm uppercase">Pattern</h3>
          <p className="text-sm text-muted-foreground">All</p>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
