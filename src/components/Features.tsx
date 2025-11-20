import { ShieldCheck, Globe, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Suppliers",
    description: "All suppliers are thoroughly vetted and certified to ensure quality and reliability."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access manufacturers from over 50 countries with diverse textile specializations."
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Streamlined RFQ system gets you quotes from multiple suppliers within 24 hours."
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Real-time pricing trends and market analytics to make informed decisions."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Choose TextileHub?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to source, negotiate, and purchase textiles efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
