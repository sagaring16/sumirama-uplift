import { Heart, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/sumirama-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Sumirama Foundation" className="h-12 w-auto" />
              <div>
                <h3 className="font-bold text-foreground">Sumirama Foundation</h3>
                <p className="text-xs text-muted-foreground italic">We Rise By Lifting Others</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering communities through compassionate service and sustainable initiatives.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Youtube className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">Food Distribution</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Clothes Distribution</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Medical Care</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Tree Plantation</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Community Support</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <p className="text-sm text-muted-foreground">
                  Akola, Maharashtra<br />India
                </p>
              </li>
              <li>
                <a href="mailto:info@sumiramafoundation.org" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@sumiramafoundation.org
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Sumirama Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart className="h-4 w-4 text-secondary fill-secondary" /> for the community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
