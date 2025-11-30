import { Utensils, Shirt, Stethoscope, Trees, Gift, Heart } from "lucide-react";
import foodImage from "@/assets/food-distribution.jpg";
import clothesImage from "@/assets/clothes-distribution.jpg";
import medicalImage from "@/assets/medical-camp.jpg";
import treesImage from "@/assets/tree-plantation.jpg";
import festivalImage from "@/assets/festival-celebration.jpg";

const programs = [
  {
    title: "Food Distribution",
    icon: Utensils,
    description: "Providing nutritious meals to those living on the streets and struggling with basic needs.",
    details: "Every day, countless individuals go to bed hungry. Our food distribution program ensures that warm, nutritious meals reach the homeless and underprivileged in our city. We've served over 10,000 meals this year alone, bringing not just food, but hope and dignity to those who need it most.",
    stats: "10,000+ meals served annually",
    image: foodImage,
    color: "primary"
  },
  {
    title: "Clothes Distribution",
    icon: Shirt,
    description: "Distributing warm clothing to help the needy survive harsh winters.",
    details: "Winter can be brutal for those without shelter. Our clothes distribution drive provides warm blankets, jackets, and winter wear to people living on the streets. We believe that warmth is not a luxury—it's a necessity. Every piece of clothing we distribute is a message that someone cares.",
    stats: "5,000+ warm clothes distributed",
    image: clothesImage,
    color: "secondary"
  },
  {
    title: "Medical Care & Medicine",
    icon: Stethoscope,
    description: "Free medical consultations and medicine distribution for underserved communities.",
    details: "Healthcare is a fundamental right, not a privilege. For years, we've organized medical camps providing free consultations, essential medicines, and health screenings. Our team of volunteer doctors and nurses has treated thousands of patients who otherwise couldn't afford medical care.",
    stats: "3,000+ patients treated yearly",
    image: medicalImage,
    color: "accent"
  },
  {
    title: "Tree Plantation",
    icon: Trees,
    description: "Creating a greener tomorrow through community tree plantation drives.",
    details: "We're committed to environmental sustainability. Our tree plantation initiatives bring communities together to plant saplings, creating greener neighborhoods and cleaner air. Each tree we plant is an investment in our planet's future and a legacy for the next generation.",
    stats: "2,000+ trees planted",
    image: treesImage,
    color: "accent"
  },
  {
    title: "Orphanage & Old Age Homes",
    icon: Gift,
    description: "Visiting orphanages and old age homes with essential goods and compassion.",
    details: "Our extended family includes children in orphanages and elders in care homes. We regularly visit these facilities, distributing essentials, spending quality time, and reminding them they're not forgotten. These visits bring smiles that last far beyond our departure.",
    stats: "50+ homes visited monthly",
    image: festivalImage,
    color: "secondary"
  },
  {
    title: "Festival Celebrations",
    icon: Heart,
    description: "Celebrating festivals with our extended family at care facilities.",
    details: "Festivals are about togetherness and joy. We celebrate major festivals with children and elders at orphanages and old age homes, bringing gifts, sweets, and most importantly, our presence. These celebrations create memories that remind everyone they're part of a larger, caring community.",
    stats: "12+ festivals celebrated yearly",
    image: festivalImage,
    color: "primary"
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Through our diverse initiatives, we're making a tangible difference 
            in the lives of thousands. Each program is designed with compassion 
            and executed with dedication.
          </p>
        </div>

        <div className="space-y-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={program.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className={`w-14 h-14 rounded-lg bg-${program.color}/10 flex items-center justify-center mb-6`}>
                      <Icon className={`h-7 w-7 text-${program.color}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {program.title}
                    </h3>
                    
                    <p className="text-base text-muted-foreground font-medium mb-4">
                      {program.description}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {program.details}
                    </p>
                    
                    <div className={`inline-block px-4 py-2 bg-${program.color}/10 rounded-lg`}>
                      <span className={`text-${program.color} font-semibold text-sm`}>
                        {program.stats}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-medium group">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
