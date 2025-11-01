import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border shadow-card hover:shadow-hover transition-smooth">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={`${product.title} - ${product.category}`}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-sm line-clamp-2 min-h-[2.5rem]" title={product.title}>
          {product.title}
        </h3>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground capitalize">
              {product.category}
            </p>
            <p className="text-lg font-bold">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
