import React from "react";
import { Heart, Leaf, Droplet, Calendar } from "lucide-react";

const impactStats = [
  {
    icon: Leaf,
    label: "Trees Planted",
    value: "45,000+",
    color: "text-green-600",
  },
  {
    icon: Droplet,
    label: "Cleanup Sites",
    value: "1,200+",
    color: "text-blue-600",
  },
  {
    icon: Heart,
    label: "Active Volunteers",
    value: "8,500+",
    color: "text-red-500",
  },
  {
    icon: Calendar,
    label: "Events Conducted",
    value: "50+",
    color: "text-emerald-600",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-6">
                <stat.icon className={`w-10 h-10 ${stat.color}`} />
              </div>
              <p className="text-4xl font-serif font-bold text-gray-900 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
