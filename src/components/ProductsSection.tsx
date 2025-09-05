import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Shampoo Hidratante Premium",
    brand: "Salon Pro",
    price: 89.90,
    originalPrice: 109.90,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop",
    rating: 4.8,
    category: "Cabelo",
    bestseller: true
  },
  {
    id: 2,
    name: "Esmalte Gel Longa Duração",
    brand: "Nail Art",
    price: 24.90,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&h=300&fit=crop",
    rating: 4.9,
    category: "Unhas",
    bestseller: false
  },
  {
    id: 3,
    name: "Máscara Facial Detox",
    brand: "Glow Beauty",
    price: 67.90,
    originalPrice: 85.90,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop",
    rating: 4.7,
    category: "Skincare",
    bestseller: true
  },
  {
    id: 4,
    name: "Óleo Capilar Nutritivo",
    brand: "Hair Therapy",
    price: 45.90,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=300&h=300&fit=crop",
    rating: 4.6,
    category: "Cabelo",
    bestseller: false
  }
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Produtos Premium
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leve para casa os mesmos produtos profissionais que utilizamos no salão
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="group overflow-hidden bg-card border-0 shadow-soft hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                {product.bestseller && (
                  <Badge className="absolute top-3 left-3 bg-gradient-primary text-white z-10">
                    Mais Vendido
                  </Badge>
                )}
                
                <div className="absolute top-3 right-3 z-10">
                  <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
                
                <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{product.brand}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                  </div>
                </div>

                <Button 
                  variant="elegant"
                  size="sm"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Adicionar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8"
          >
            Ver Toda Loja
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;