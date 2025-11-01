import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import FilterSidebar from "./FilterSidebar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("recommended");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.map((product: Product) => product.category))
        );
        setCategories(uniqueCategories as string[]);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-az":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-za":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        // recommended - keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategories, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const FilterContent = () => (
    <FilterSidebar
      categories={categories}
      selectedCategories={selectedCategories}
      onCategoryChange={handleCategoryChange}
    />
  );

  if (loading) {
    return (
      <div className="container-plp py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="container-plp py-8">
      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <h2 className="text-lg font-semibold">
            {filteredProducts.length} ITEMS
          </h2>

          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                FILTER
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>

          <Button variant="ghost" size="sm" className="hidden lg:inline-flex text-muted-foreground">
            <ChevronLeft className="h-4 w-4 mr-1" />
            HIDE FILTER
          </Button>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">RECOMMENDED</SelectItem>
              <SelectItem value="name-az">NAME: A TO Z</SelectItem>
              <SelectItem value="name-za">NAME: Z TO A</SelectItem>
              <SelectItem value="price-low">PRICE: LOW TO HIGH</SelectItem>
              <SelectItem value="price-high">PRICE: HIGH TO LOW</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <FilterContent />
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your filters.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSelectedCategories([])}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
