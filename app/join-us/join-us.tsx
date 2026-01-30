"use client";

import { Button } from "@/components/ui/button";
import { Users, Megaphone, Leaf, MapPin, Heart } from "lucide-react";

const roles = [
  {
    id: 1,
    title: "Volunteer Coordinator",
    icon: Users,
    shortName: "VC",
    description:
      "Helps organize volunteers, keeps track of participation, and ensures events run smoothly.",
    details:
      "Perfect for people who love leadership, coordination, and teamwork. You'll be the backbone of our operations.",
    skills: ["Leadership", "Organization", "Communication", "Team Management"],
    impact: "Enables smooth event operations and volunteer coordination",
    color: "from-blue-50 to-blue-100 border-blue-200",
  },
  {
    id: 2,
    title: "Social Media & Content Creator",
    icon: Megaphone,
    shortName: "SMCC",
    description:
      "Captures the spirit of CleanDay through photos, videos, graphics, and posts.",
    details:
      "Great for creative and tech-savvy members. Manage our social media pages, website updates, and help spread our message online.",
    skills: [
      "Photography/Videography",
      "Content Creation",
      "Social Media",
      "Design",
      "Tech Skills",
    ],
    impact: "Amplifies our message and reaches thousands online",
    color: "from-purple-50 to-purple-100 border-purple-200",
  },
  {
    id: 3,
    title: "Regional Volunteer (Green Champion)",
    icon: MapPin,
    shortName: "GC",
    description:
      "Represent CleanDay in your city or district. Organize local cleanups, tree-planting events, and awareness drives.",
    details:
      "Ideal for proactive local leaders. Report activities back to the core team and be the face of CleanDay in your region.",
    skills: [
      "Local Leadership",
      "Event Organization",
      "Community Outreach",
      "Problem Solving",
    ],
    impact: "Brings CleanDay's mission to local communities",
    color: "from-green-50 to-green-100 border-green-200",
  },
  {
    id: 4,
    title: "General Member (Green Warrior)",
    icon: Heart,
    shortName: "GW",
    description:
      "The heart of CleanDay! Participate in events, join cleanups, plant trees, and spread awareness.",
    details:
      "Everyone can be a Green Warrior — no matter where you are. You can always contribute in multiple ways as the movement grows!",
    skills: [
      "Enthusiasm",
      "Dedication",
      "Community Spirit",
      "Environmental Passion",
    ],
    impact: "The foundation of every successful CleanDay initiative",
    color: "from-emerald-50 to-emerald-100 border-emerald-200",
  },
];

const contactInfo = {
  title: "Join the Green Revolution",
  subtitle: "Be Part of CleanDay's Mission",
  description:
    "Ready to make a difference? Join our community of environmental warriors and help us create a cleaner, greener World. Together, we can turn every day into a Clean Day.",
};

const applyLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSeKJ-OkOCwVeCDb7CumeEuENXpXe5nwTRx_GvK9fsgu5vuy3A/viewform";
const features = [
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Join thousands of volunteers making real environmental change",
  },
  {
    icon: Heart,
    title: "Meaningful Work",
    description: "Contribute to causes that matter for our planet's future",
  },
  {
    icon: Leaf,
    title: "Green Skills",
    description: "Learn sustainable practices and environmental conservation",
  },
];

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-green-800 mb-6 leading-tight">
            {contactInfo.title}
          </h1>
          <p className="text-xl md:text-2xl text-green-600 font-medium mb-8">
            {contactInfo.subtitle}
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {contactInfo.description}
          </p>
          <button
            onClick={() => {
              window.open(applyLink);
            }}
            className="bg-green-600 mt-12 hover:bg-green-700 text-white px-10 py-4 rounded-full font-sans font-semibold text-lg transition-colors cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
              Choose Your Role in CleanDay
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed font-sans">
              At CleanDay, everyone has a place to contribute. Whether you're a
              natural leader, creative genius, community advocate, or passionate
              environmentalist, there's a perfect role for you. Select the role
              that best matches your interests and skills, and become part of
              something meaningful.
            </p>
            <p className="text-lg text-primary font-semibold font-sans">
              ✨ Remember: You can contribute in multiple ways as the movement
              grows!
            </p>
          </div>
        </div>
      </section>

      {/* Roles Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {roles.map((role) => {
              const IconComponent = role.icon;
              return (
                <div
                  key={role.id}
                  className={`bg-gradient-to-br ${role.color} rounded-xl border-2 p-8 md:p-10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-foreground">
                          {role.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg font-semibold text-foreground mb-3 font-sans">
                    {role.description}
                  </p>

                  {/* Details */}
                  <p className="text-foreground/80 mb-6 leading-relaxed font-sans">
                    {role.details}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3 font-serif">
                      Key Skills & Qualities:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-block bg-white/60 text-foreground px-3 py-1 rounded-full text-sm font-medium font-sans"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="border-t-2 border-white/30 pt-4 mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2 font-serif">
                      Your Impact:
                    </p>
                    <p className="text-foreground/80 font-sans">
                      {role.impact}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-foreground">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Do I need previous experience to volunteer?",
                a: "No! We welcome everyone regardless of experience. Whether you're a complete beginner or an expert, there's a role for you. We provide training and support every step of the way.",
              },
              {
                q: "How much time do I need to commit?",
                a: "It's flexible! You can contribute as much or as little as your schedule allows. Some volunteers help on weekends, others during weekdays. Choose what works best for you.",
              },
              {
                q: "Can I switch roles later?",
                a: "Absolutely! As CleanDay grows and you discover new interests, feel free to explore different roles. Many of our volunteers contribute in multiple ways!",
              },
              {
                q: "What if I can't commit long-term?",
                a: "That's perfectly fine! Even short-term contributions are valuable. From one-time event help to seasonal participation, every bit counts.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                  {faq.q}
                </h3>
                <p className="text-foreground/70 font-sans leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
