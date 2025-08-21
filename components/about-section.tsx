import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Community Cleanups",
      description:
        "Organize and participate in local cleanups — from streets, parks, rivers, and public spaces — especially where no dedicated maintenance teams are available.",
    },
    {
      icon: Heart,
      title: "Tree Plantation & Green Projects",
      description:
        "Plant trees, maintain greenery, and promote eco-friendly practices in urban and rural areas across Nepal.",
    },
    {
      icon: Lightbulb,
      title: "Awareness Campaigns",
      description:
        "Educate communities about environmental protection, recycling, and sustainable living through engaging programs.",
    },
    {
      icon: Users,
      title: "Volunteer Engagement",
      description:
        "Empower individuals to take part in hands-on environmental action, turning ordinary citizens into active Green Warriors.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            CleanDay is a non-profit, community-driven organization dedicated to
            creating a cleaner and greener environment across Nepal. We combine
            action with awareness, cleaning and planting while inspiring others
            to take responsibility for the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-card-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-serif font-bold text-2xl text-foreground mb-4">
              Our Approach
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine action with awareness. Wherever we go, we clean, plant,
              and inspire others to take responsibility for the environment.
              Through our initiatives, we aim to build a culture of
              environmental stewardship in every community across Nepal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
