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
    price: "$3.50/meter",
    supplier: "Global Textiles Co.",
    stock: "In Stock"
  },
  {
    id: 2,
    name: "Silk Blend Material",
    fabricType: "Silk Blend",
    gsm: 120,
    color: "Ivory",
    width: "54 inches",
    moq: "300 meters",
    price: "$8.75/meter",
    supplier: "Premium Fabrics Ltd",
    stock: "In Stock"
  },
  {
    id: 3,
    name: "Polyester Athletic Fabric",
    fabricType: "Polyester",
    gsm: 150,
    color: "Navy Blue",
    width: "58 inches",
    moq: "1000 meters",
    price: "$2.80/meter",
    supplier: "SportTex Industries",
    stock: "Limited Stock"
  },
  {
    id: 4,
    name: "Linen Summer Cloth",
    fabricType: "Linen",
    gsm: 200,
    color: "Beige",
    width: "56 inches",
    moq: "400 meters",
    price: "$5.20/meter",
    supplier: "Natural Fabrics Inc",
    stock: "In Stock"
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
              <Card key={product.id} className="hover:shadow-lg transition-all duration-300">
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
