const heroContent = {
  title: "Where Every Efforts,",
  titleHighlight: "Ripples Green",
  description:
    "Join CleanDay in creating a cleaner and greener environment. Our mission is simple yet powerful:",
  mission: "Act, Clean, Inspire.",
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/background.jpg"
          alt="Beautiful green landscape of Nepal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            {heroContent.title}{" "}
            <span className="text-primary">{heroContent.titleHighlight}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {heroContent.description}{" "}
            <strong className="text-primary">{heroContent.mission}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
