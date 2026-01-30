"use client";
import { Users, Heart, Leaf } from "lucide-react";

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

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 border-gray-200 border-1 bg-white rounded-2xl"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
