import React from "react";
import { Newspaper, Globe, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";
import AboutHero from "@/components/aboutpage/AboutHero";

export const metadata = {
  title: "Dragon News - About",
};

const AboutPage = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <AboutHero />
      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <Image
              src="https://images.unsplash.com/photo-1495020689067-958852a7765e"
              alt="Newsroom"
              width={800}
              height={400}
              className="rounded-3xl shadow-lg w-full  object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>

            <p className="text-gray-600 leading-8 mb-5">
              Dragon News was founded to provide honest, transparent, and
              unbiased journalism. We believe people deserve facts, not noise.
            </p>

            <p className="text-gray-600 leading-8">
              Our mission is to create a modern digital newsroom that values
              truth, diversity, and accessibility for readers across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-base-200 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Why Readers Trust Dragon News
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card */}
            <div className="bg-base-100 p-8 rounded-3xl shadow-md hover:shadow-xl transition">
              <Newspaper className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Trusted Reporting</h3>
              <p className="text-gray-500">
                Verified news from reliable journalists and sources.
              </p>
            </div>

            <div className="bg-base-100 p-8 rounded-3xl shadow-md hover:shadow-xl transition">
              <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Global Coverage</h3>
              <p className="text-gray-500">
                News stories from every corner of the world.
              </p>
            </div>

            <div className="bg-base-100 p-8 rounded-3xl shadow-md hover:shadow-xl transition">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Community Focused</h3>
              <p className="text-gray-500">
                We value readers and encourage informed discussions.
              </p>
            </div>

            <div className="bg-base-100 p-8 rounded-3xl shadow-md hover:shadow-xl transition">
              <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Reliable Information</h3>
              <p className="text-gray-500">
                Fact-based journalism with transparency and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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
      
    </div>
  );
};

export default AboutPage;
