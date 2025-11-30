import { useState } from "react";
import { ArrowLeft, Image as ImageIcon, Video, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Placeholder gallery items - you can replace these with actual uploads
const galleryItems = [
  { type: "image", src: "/api/placeholder/600/400", title: "Food Distribution Drive", category: "Food" },
  { type: "image", src: "/api/placeholder/600/400", title: "Medical Camp", category: "Healthcare" },
  { type: "image", src: "/api/placeholder/600/400", title: "Clothes Distribution", category: "Clothing" },
  { type: "image", src: "/api/placeholder/600/400", title: "Tree Plantation", category: "Environment" },
  { type: "image", src: "/api/placeholder/600/400", title: "Festival Celebration", category: "Events" },
  { type: "image", src: "/api/placeholder/600/400", title: "Orphanage Visit", category: "Community" },
  { type: "video", src: "/api/placeholder/600/400", title: "Volunteer Stories", category: "Videos" },
  { type: "image", src: "/api/placeholder/600/400", title: "Community Gathering", category: "Events" },
];

const categories = ["All", "Food", "Healthcare", "Clothing", "Environment", "Events", "Community", "Videos"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Our Gallery
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Explore moments of hope, compassion, and community service. 
              Each image tells a story of lives touched and hearts changed.
            </p>
          </div>
        </section>

        {/* Upload Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Share Your Moments
              </h2>
              <p className="text-muted-foreground mb-6">
                Have photos or videos from our events? Upload them to share with the community!
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Upload Photos/Videos
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Supported formats: JPG, PNG, MP4, MOV (Max 10MB)
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <div 
                  key={index}
                  className="group relative rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[4/3] bg-muted">
                    <img 
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        {item.type === "video" ? (
                          <Video className="h-5 w-5 text-white" />
                        ) : (
                          <ImageIcon className="h-5 w-5 text-white" />
                        )}
                        <span className="text-xs font-semibold text-white/80 uppercase tracking-wide">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Video Badge */}
                  {item.type === "video" && (
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Video className="h-5 w-5 text-secondary-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" className="px-8">
                Load More
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
