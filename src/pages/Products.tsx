import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Package } from "lucide-react";
import { Link } from "react-router-dom";

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Cotton Fabric",
    fabricType: "Cotton",
    gsm: 180,
    color: "White",
    width: "60 inches",
    moq: "500 meters",
    price: "₹280/meter",
    supplier: "Premium Textiles Co.",
    stock: "In Stock",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea3c8e5e?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 2,
    name: "Silk Blend Material",
    fabricType: "Silk Blend",
    gsm: 120,
    color: "Ivory",
    width: "54 inches",
    moq: "300 meters",
    price: "₹700/meter",
    supplier: "Global Fabrics Ltd.",
    stock: "In Stock",
    image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 3,
    name: "Polyester Athletic Fabric",
    fabricType: "Polyester",
    gsm: 150,
    color: "Navy Blue",
    width: "58 inches",
    moq: "1000 meters",
    price: "₹225/meter",
    supplier: "Asian Textile Hub",
    stock: "Limited Stock",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 4,
    name: "Linen Summer Cloth",
    fabricType: "Linen",
    gsm: 200,
    color: "Beige",
    width: "56 inches",
    moq: "400 meters",
    price: "₹420/meter",
    supplier: "European Fabrics Group",
    stock: "In Stock",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 5,
    name: "Organic Cotton Twill",
    fabricType: "Cotton",
    gsm: 220,
    color: "Natural",
    width: "58 inches",
    moq: "400 meters",
    price: "₹350/meter",
    supplier: "Eco Textiles Inc.",
    stock: "In Stock",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 6,
    name: "Rayon Viscose Fabric",
    fabricType: "Rayon",
    gsm: 140,
    color: "Coral Pink",
    width: "60 inches",
    moq: "800 meters",
    price: "₹320/meter",
    supplier: "Pacific Fabrics Co.",
    stock: "In Stock",
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 7,
    name: "Wool Blend Suiting",
    fabricType: "Wool Blend",
    gsm: 280,
    color: "Charcoal Grey",
    width: "62 inches",
    moq: "600 meters",
    price: "₹850/meter",
    supplier: "Global Fabrics Ltd.",
    stock: "In Stock",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 8,
    name: "Denim Stretch Fabric",
    fabricType: "Cotton Blend",
    gsm: 320,
    color: "Indigo Blue",
    width: "58 inches",
    moq: "1000 meters",
    price: "₹380/meter",
    supplier: "Premium Textiles Co.",
    stock: "In Stock",
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 9,
    name: "Chiffon Georgette",
    fabricType: "Polyester",
    gsm: 80,
    color: "Mint Green",
    width: "54 inches",
    moq: "300 meters",
    price: "₹180/meter",
    supplier: "Asian Textile Hub",
    stock: "In Stock",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 10,
    name: "Canvas Duck Cloth",
    fabricType: "Cotton",
    gsm: 400,
    color: "Khaki",
    width: "60 inches",
    moq: "500 meters",
    price: "₹450/meter",
    supplier: "Premium Textiles Co.",
    stock: "Limited Stock",
    image: "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 11,
    name: "Satin Crepe Fabric",
    fabricType: "Silk Blend",
    gsm: 110,
    color: "Burgundy",
    width: "56 inches",
    moq: "350 meters",
    price: "₹680/meter",
    supplier: "European Fabrics Group",
    stock: "In Stock",
    image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 12,
    name: "Bamboo Jersey Knit",
    fabricType: "Bamboo",
    gsm: 180,
    color: "Sage Green",
    width: "60 inches",
    moq: "400 meters",
    price: "₹520/meter",
    supplier: "Eco Textiles Inc.",
    stock: "In Stock",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&h=300&q=80"
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Textile Products
            </h1>
            <p className="text-muted-foreground">
              Browse our extensive catalog of premium textiles and fabrics
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search by fabric type, color, or supplier..." 
                  className="pl-10"
                />
              </div>
            </div>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Fabric Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="cotton">Cotton</SelectItem>
                <SelectItem value="silk">Silk</SelectItem>
                <SelectItem value="polyester">Polyester</SelectItem>
                <SelectItem value="linen">Linen</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg text-foreground">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {product.supplier}
                      </p>
                    </div>
                    <Badge variant={product.stock === "In Stock" ? "default" : "secondary"}>
                      {product.stock}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Type:</span>
                      <span className="ml-2 font-medium">{product.fabricType}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">GSM:</span>
                      <span className="ml-2 font-medium">{product.gsm}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Color:</span>
                      <span className="ml-2 font-medium">{product.color}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Width:</span>
                      <span className="ml-2 font-medium">{product.width}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">MOQ:</span>
                      <span className="font-semibold">{product.moq}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Price:</span>
                      <span className="text-lg font-bold text-accent">{product.price}</span>
                    </div>
                  </div>

                  <Link to={`/products/${product.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Package className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
