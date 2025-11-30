import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const JoinUs = () => {
  return (
    <section id="join" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground">
            Be part of something bigger. Whether through volunteering, donating, 
            or spreading the word, your contribution creates real change.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-medium">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Get In Touch
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Your Name
                </label>
                <Input 
                  placeholder="Enter your full name" 
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel" 
                  placeholder="+91 XXXXX XXXXX" 
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  How would you like to help?
                </label>
                <Textarea 
                  placeholder="Tell us about your interest in volunteering, donating, or partnering with us..."
                  rows={5}
                />
              </div>

              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-base">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Ways to Help */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <a href="mailto:info@sumiramafoundation.org" className="text-muted-foreground hover:text-primary transition-colors">
                      info@sumiramafoundation.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Phone</div>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Location</div>
                    <p className="text-muted-foreground">
                      Akola, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ways to Help */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Ways to Contribute
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold text-foreground mb-1">Volunteer</h4>
                  <p className="text-sm text-muted-foreground">
                    Join our team and make a direct impact in your community
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/5 rounded-lg border-l-4 border-secondary">
                  <h4 className="font-semibold text-foreground mb-1">Donate</h4>
                  <p className="text-sm text-muted-foreground">
                    Financial contributions help us expand our reach and impact
                  </p>
                </div>
                
                <div className="p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                  <h4 className="font-semibold text-foreground mb-1">Partner</h4>
                  <p className="text-sm text-muted-foreground">
                    Collaborate with us through corporate social responsibility programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
