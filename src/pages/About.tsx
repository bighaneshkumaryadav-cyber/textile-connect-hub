import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, Shield, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About TextileHub
            </h1>
            <p className="text-lg text-muted-foreground">
              Connecting the world's textile industry through innovation and trust
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  TextileHub is revolutionizing the global textile industry by creating a transparent, 
                  efficient, and trusted B2B marketplace. We connect buyers with verified suppliers worldwide, 
                  making it easier than ever to source premium fabrics and textiles at competitive prices.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <Globe className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                  <p className="text-muted-foreground">
                    Access to 10,000+ verified suppliers across 50+ countries, bringing the world's 
                    textile industry to your fingertips.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Verified Quality</h3>
                  <p className="text-muted-foreground">
                    Every supplier undergoes rigorous verification to ensure quality standards, 
                    certifications, and business legitimacy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Direct Connection</h3>
                  <p className="text-muted-foreground">
                    Connect directly with manufacturers, eliminating middlemen and reducing costs 
                    while maintaining quality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    Negotiate bulk orders with flexible MOQ options and get the best prices 
                    for your textile needs.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Why Choose TextileHub?</h2>
                <div className="space-y-3">
                  {[
                    "Comprehensive supplier verification process",
                    "Secure payment and transaction protection",
                    "Quality assurance and dispute resolution",
                    "Real-time inventory and pricing updates",
                    "Dedicated customer support team",
                    "Industry-leading technology platform"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-12 w-12 text-accent" />
                  <h2 className="text-2xl font-bold">Our Commitment</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  We are committed to building a sustainable and ethical textile industry. Our platform 
                  promotes transparency, fair trade practices, and environmental responsibility.
                </p>
                <p className="text-muted-foreground">
                  Join thousands of businesses worldwide who trust TextileHub for their textile sourcing needs. 
                  Whether you're a small boutique or a large manufacturer, we have the right suppliers for you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
