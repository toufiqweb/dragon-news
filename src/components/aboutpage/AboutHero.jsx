import React from "react";

const AboutHero = () => {
  return (
    <section className="bg-base-200 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <span className="badge badge-primary badge-outline mb-4">
          About Dragon News
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Journalism Without Fear or Favour
        </h1>

        <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-8">
          Dragon News is your trusted source for breaking news, world events,
          politics, technology, sports, and entertainment — delivering reliable
          information that keeps readers informed every day.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
