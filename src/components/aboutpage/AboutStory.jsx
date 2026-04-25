import Image from "next/image";
import React from "react";

const AboutStory = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <Image
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e"
            alt="Newsroom"
            width={800}
            height={400}
            className="rounded-3xl shadow-lg w-full h-100 object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>

          <p className="text-gray-600 leading-8 mb-5">
            Dragon News was founded to provide honest, transparent, and unbiased
            journalism. We believe people deserve facts, not noise.
          </p>

          <p className="text-gray-600 leading-8">
            Our mission is to create a modern digital newsroom that values
            truth, diversity, and accessibility for readers across the globe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
