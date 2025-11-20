import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const suppliers = [
  {
    id: 1,
    name: "Premium Textiles Co.",
    location: "Mumbai, India",
    rating: 4.8,
    verified: true,
    specialties: ["Cotton", "Silk", "Linen"],
    minOrder: "500 yards",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea3c8e5e?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 2,
    name: "Global Fabrics Ltd.",
    location: "Istanbul, Turkey",
    rating: 4.9,
    verified: true,
    specialties: ["Wool", "Synthetic", "Blends"],
    minOrder: "1000 yards",
    image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 3,
    name: "Asian Textile Hub",
    location: "Guangzhou, China",
    rating: 4.7,
    verified: true,
    specialties: ["Polyester", "Nylon", "Spandex"],
    minOrder: "2000 yards",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 4,
    name: "European Fabrics Group",
    location: "Milan, Italy",
    rating: 4.9,
    verified: true,
    specialties: ["Designer Fabrics", "Luxury Textiles"],
    minOrder: "300 yards",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 5,
    name: "Eco Textiles Inc.",
    location: "Barcelona, Spain",
    rating: 4.6,
    verified: true,
    specialties: ["Organic Cotton", "Bamboo", "Hemp"],
    minOrder: "400 yards",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 6,
    name: "Pacific Fabrics Co.",
    location: "Bangkok, Thailand",
    rating: 4.8,
    verified: true,
    specialties: ["Rayon", "Viscose", "Modal"],
    minOrder: "800 yards",
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&w=400&h=300&q=80"
  }
];

const Suppliers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Verified Textile Suppliers
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect with trusted manufacturers worldwide. All suppliers are verified for quality and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suppliers.map((supplier) => (
            <Card key={supplier.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                <img 
                  src={supplier.image} 
                  alt={supplier.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{supplier.name}</CardTitle>
                  {supplier.verified && (
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  )}
                </div>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {supplier.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{supplier.rating}</span>
                  <span className="text-sm text-muted-foreground">(250+ reviews)</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {supplier.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  Min Order: <span className="font-semibold text-foreground">{supplier.minOrder}</span>
                </div>
                
                <Link to="/auth">
                  <Button className="w-full bg-accent hover:bg-accent-light">
                    Contact Supplier
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
