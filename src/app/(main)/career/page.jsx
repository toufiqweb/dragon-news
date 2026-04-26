import React from "react";
import { BriefcaseBusiness, Clock3, Mail, Rocket } from "lucide-react";
export const metadata = {
  title: "Dragon news - career",
};
const CareerPage = () => {
  return   <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full">
        <div className="bg-base-200 rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">
          {/* Left Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="badge badge-primary badge-outline mb-4 w-fit">
              Dragon News Careers
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Career Page <span className="text-primary">Coming Soon</span>
            </h1>

            <p className="text-gray-500 text-lg leading-8 mb-8">
              We’re building an exciting careers portal where talented people
              can join Dragon News and shape the future of journalism.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <BriefcaseBusiness className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base-content">
                  Journalism & Media Opportunities
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base-content">
                  Fast-growing Digital News Platform
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Clock3 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base-content">
                  Career Opportunities Launching Soon
                </span>
              </div>
            </div>

            {/* Notify */}
            <div className="space-y-4">
              <p className="font-medium">
                Get notified when openings are available:
              </p>

              <div className="join w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered join-item w-full"
                />
                <button className="btn btn-primary join-item">
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Illustration */}
          <div className="bg-neutral text-neutral-content flex flex-col items-center justify-center p-10 relative">
            <div className="absolute top-6 right-6 badge badge-secondary">
              Hiring Soon
            </div>

            <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mb-8">
              <BriefcaseBusiness className="w-16 h-16 text-primary" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              We’re Building Something Amazing
            </h2>

            <p className="text-center text-gray-300 max-w-sm leading-7">
              Dragon News is preparing a dedicated space for future careers,
              internships, and newsroom opportunities.
            </p>

            {/* Contact */}
            <div className="mt-10 bg-base-100/10 backdrop-blur rounded-2xl p-5 w-full max-w-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-gray-300">Contact us</p>
                  <p className="font-medium">careers@dragonnews.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10">
          <p className="text-gray-500">
            Stay tuned — exciting opportunities are on the way 🚀
          </p>
        </div>
      </div>
    </div>;
};

export default CareerPage;
