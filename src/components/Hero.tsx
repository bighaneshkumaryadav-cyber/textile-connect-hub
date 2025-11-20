import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-textile.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Connect with Global
                <span className="text-primary block">Textile Suppliers</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Your trusted B2B marketplace for premium fabrics, textiles, and bulk orders. 
                Connect directly with verified manufacturers worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth">
                <Button size="lg" className="bg-accent hover:bg-accent-light w-full sm:w-auto">
                  Start Sourcing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Browse Products
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              {[
                "Direct access to 10,000+ verified suppliers",
                "Competitive bulk pricing & MOQ flexibility",
                "Secure transactions & quality assurance"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Textile warehouse with colorful fabric rolls" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-lg p-6 shadow-xl hidden lg:block">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm">Verified Suppliers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
