"use client";

const donateContent = {
  hero: {
    title: "Your Donation Makes a Difference",
    subtitle: "Help CleanDay create a cleaner, greener World",
    description:
      "Every contribution, no matter the size, fuels our mission to clean communities, plant trees, and inspire environmental action. Join us in building a sustainable future.",
  },

  testimonials: [
    {
      name: "Sunita Pant",
      role: "Donor",
      message:
        "Supporting CleanDay feels like investing in our planet. Their transparency and impact are remarkable!",
    },
    {
      name: "Dr. Aman Khanal",
      role: "Corporate Donor",
      message:
        "We love how CleanDay turns donations into visible environmental change in our community.",
    },
    {
      name: "Amit Joshi",
      role: "Monthly Contributor",
      message:
        "A small monthly donation from me has planted over 300 trees. Imagine what we can achieve together!",
    },
  ],
};

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-green-100 rounded-full">
            <span className="text-green-700 font-medium text-sm">
              Support Our Mission
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-6 leading-tight">
            {donateContent.hero.title}
          </h1>
          <p className="text-xl text-green-700 mb-4 font-medium">
            {donateContent.hero.subtitle}
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-10">
            {donateContent.hero.description}
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-sans font-semibold text-lg transition-colors cursor-pointer">
            Start Donating
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
            Why Donors Love Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donateContent.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic font-sans">
                  {testimonial.message}
                </p>
                <div>
                  <p className="font-serif font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm font-sans">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Where does my donation go?",
                a: "100% of donations support our environmental initiatives including cleanup drives, tree planting, and community awareness programs.",
              },
              {
                q: "Can I donate anonymously?",
                a: "Yes, absolutely. We respect your privacy and can process anonymous donations upon request.",
              },
              {
                q: "Is my donation tax-deductible?",
                a: "CleanDay is registered as a non-profit. Please check with your tax advisor for tax deduction eligibility.",
              },
              {
                q: "Can I set up a monthly donation?",
                a: "Yes! Monthly donations help us plan long-term initiatives. Contact us at info@cleandayglobal.org for recurring donation options.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-green-200 rounded-lg p-6 hover:bg-green-50 transition-colors"
              >
                <h3 className="font-serif font-semibold text-gray-900 mb-3 text-lg">
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed font-sans">
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
