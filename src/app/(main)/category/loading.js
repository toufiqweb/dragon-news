import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 md:px-10 py-6 animate-pulse">
      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-3 space-y-5">
          <div className="skeleton h-6 w-40 mb-6"></div>

          {[...Array(8)].map((_, i) => (
            <div key={i} className="skeleton h-10 w-full rounded-lg"></div>
          ))}
        </div>

        {/* Main Content */}
        <div className="lg:col-span-6">
          <div className="space-y-5">
            {/* Card Header */}
            <div className="bg-base-200 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="skeleton h-12 w-12 rounded-full"></div>

                  <div className="space-y-2">
                    <div className="skeleton h-4 w-32"></div>
                    <div className="skeleton h-3 w-24"></div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="skeleton h-5 w-5 rounded"></div>
                  <div className="skeleton h-5 w-5 rounded"></div>
                </div>
              </div>

              {/* Title */}
              <div className="mt-6 space-y-3">
                <div className="skeleton h-6 w-full"></div>
                <div className="skeleton h-6 w-4/5"></div>
              </div>

              {/* Image */}
              <div className="skeleton h-72 w-full rounded-xl mt-6"></div>

              {/* Text */}
              <div className="space-y-3 mt-6">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-5/6"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3">
          <div className="space-y-5">
            <div className="skeleton h-6 w-32 mb-4"></div>

            <div className="skeleton h-12 w-full rounded-lg"></div>
            <div className="skeleton h-12 w-full rounded-lg"></div>

            <div className="skeleton h-64 w-full rounded-xl mt-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
