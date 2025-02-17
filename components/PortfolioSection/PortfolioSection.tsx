// components/PortfolioSection.js

import { projects } from "@/Constants/Portfolio";

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-gray-200 text-sm mb-4">
            OUR WORK
          </span>
        </div>

        <div className="space-y-20">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="flex flex-col gap-4">
                <h3 className="text-5xl font-bold bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-600 max-w-2xl">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 rounded-full border border-gray-200 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 inline-flex items-center text-gray-900 hover:underline">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
