import { Award, TrendingUp, Users, Heart } from "lucide-react";

const achievements = [
  {
    icon: Users,
    number: "10,000+",
    label: "Lives Touched",
    description: "Individuals directly benefited from our programs"
  },
  {
    icon: Heart,
    number: "50+",
    label: "Active Volunteers",
    description: "Dedicated volunteers working tirelessly"
  },
  {
    icon: Award,
    number: "100+",
    label: "Successful Drives",
    description: "Community programs completed successfully"
  },
  {
    icon: TrendingUp,
    number: "5+ Years",
    label: "of Service",
    description: "Consistent community impact since inception"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Numbers tell a story, but behind each statistic is a life changed, 
            a family supported, and hope restored. Here's what we've achieved together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {achievement.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Recognition Section */}
        <div className="mt-16 bg-card rounded-2xl p-8 sm:p-12 shadow-medium">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Recognition & Awards
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              While our greatest reward is seeing smiles on the faces of those 
              we serve, we're honored to have been recognized by local authorities 
              and community leaders for our unwavering commitment to social welfare. 
              These recognitions inspire us to reach even more people in need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-primary/10 rounded-lg">
                <span className="text-primary font-semibold">Community Champion Award</span>
              </div>
              <div className="px-6 py-3 bg-secondary/10 rounded-lg">
                <span className="text-secondary font-semibold">Social Impact Recognition</span>
              </div>
              <div className="px-6 py-3 bg-accent/10 rounded-lg">
                <span className="text-accent font-semibold">Healthcare Service Award</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
