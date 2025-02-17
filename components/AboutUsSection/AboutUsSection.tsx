import { stats } from "@/Constants/About";

// components/AboutUsSection.js
const AboutUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-gray-200 text-sm mb-4">
            ABOUT US
          </span>
        </div>

        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl font-bold mb-8">
            We Integrate
            <br />
            Collaborate, and
            <br />
            Challenge.
          </h2>
          <p className="text-xl text-gray-600">
            We are digital natives embracing the creative freedom to produce
            solutions that connect, communicate, and inspire.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id}>
              <p className="text-3xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutUsSection;
