import { Heart, Users, Target } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Foundation Story */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About Sumirama Foundation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sumirama Foundation was born from a vision to create a more 
            compassionate world where no one is left behind. We are a 
            dedicated non-profit organization committed to addressing the 
            fundamental needs of underprivileged communities in Akola and beyond.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To serve humanity with compassion and dignity, ensuring that 
              basic necessities reach those who need them most.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Compassion, integrity, and community are at the heart of 
              everything we do. We believe in uplifting everyone together.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Target className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A world where every individual has access to food, healthcare, 
              education, and the opportunity to live with dignity.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-card rounded-2xl shadow-medium overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-[400px] lg:h-auto">
              <img 
                src={founderImage} 
                alt="Founder of Sumirama Foundation" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:bg-gradient-to-r" />
            </div>
            
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4 w-fit">
                <span className="text-primary font-semibold text-sm">Our Founder</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                A Heart for Service
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our founder's journey began with a simple belief: that every 
                person deserves compassion, care, and the opportunity to thrive. 
                What started as small acts of kindness in the local community 
                has blossomed into a full-fledged foundation touching thousands 
                of lives.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                With unwavering dedication and a deep commitment to social 
                justice, she has built Sumirama Foundation into a beacon of 
                hope for the underserved. Her vision continues to inspire 
                volunteers and donors to join in this noble cause.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "True fulfillment comes not from what we achieve for ourselves, 
                but from what we do for others. Every smile we bring, every 
                life we touch, is a step toward the world we envision."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
