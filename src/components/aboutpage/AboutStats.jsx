import React from "react";

const AboutStats = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-base-200 rounded-2xl p-8">
            <h3 className="text-4xl font-bold text-primary">500K+</h3>
            <p className="text-gray-500 mt-2">Monthly Readers</p>
          </div>

          <div className="bg-base-200 rounded-2xl p-8">
            <h3 className="text-4xl font-bold text-primary">120+</h3>
            <p className="text-gray-500 mt-2">Countries Reached</p>
          </div>

          <div className="bg-base-200 rounded-2xl p-8">
            <h3 className="text-4xl font-bold text-primary">50+</h3>
            <p className="text-gray-500 mt-2">Journalists</p>
          </div>

          <div className="bg-base-200 rounded-2xl p-8">
            <h3 className="text-4xl font-bold text-primary">24/7</h3>
            <p className="text-gray-500 mt-2">News Coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
