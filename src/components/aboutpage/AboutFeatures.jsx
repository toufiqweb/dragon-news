import { Globe, Newspaper, ShieldCheck, Users } from "lucide-react";
import React from "react";

const AboutFeatures = () => {
  return (
    <section className="bg-base-200 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          Why Readers Trust Dragon News
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
  );
};

export default AboutFeatures;
