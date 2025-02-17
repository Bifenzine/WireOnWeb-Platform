import { services } from "@/Constants/Services";

// components/ServicesSection.js
const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-gray-200 text-sm mb-4">
            OUR SERVICES
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">
              <h3 className="text-2xl font-semibold mb-4">
                {String(service.id).padStart(2, "0")}. {service.name}
              </h3>
              <div className="h-1 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
