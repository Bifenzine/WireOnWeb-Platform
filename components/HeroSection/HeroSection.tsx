// components/HeroSection.js
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient-hero">
          Building digital
          <br />
          products, brands,
          <br />
          and experience.
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          An agency based in New York committed to solve abstract ideas into
          concrete product.
        </p>
        <button className="px-8 py-4 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors">
          Let's connect →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
