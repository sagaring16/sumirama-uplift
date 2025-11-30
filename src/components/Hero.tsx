import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm">
              Making a Difference Since Years
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Empowering Lives,{" "}
            <span className="text-primary">Building Hope</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Sumirama Foundation is dedicated to uplifting communities through 
            compassionate service. We believe in creating lasting change by 
            providing essential support to those who need it most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg h-14 px-8"
            >
              Join Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg h-14 px-8 border-2"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">1000+</div>
              <div className="text-sm text-muted-foreground">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Programs Run</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Community Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
