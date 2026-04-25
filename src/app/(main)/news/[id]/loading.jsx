import React from "react";

const Loading = () => {
  return (
    <div className="max-h[80vh]  py-10 px-4 animate-pulse">
      <div className="max-w-4xl mx-auto bg-base-100 rounded-3xl shadow-lg overflow-hidden">
        {/* Hero Image Skeleton */}
        <div className="skeleton w-full h-[200px] md:h-[300px]"></div>

        {/* Content */}
        <div className="p-6 md:p-10">
          {/* Badge Section */}
          <div className="flex gap-3 mb-6">
            <div className="skeleton h-8 w-28 rounded-full"></div>
            <div className="skeleton h-8 w-24 rounded-full"></div>
          </div>

          {/* Title */}
          <div className="space-y-3 mb-8">
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-5/6"></div>
          </div>

          {/* Author + Stats */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-base-300 pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="skeleton h-14 w-14 rounded-full"></div>

              <div className="space-y-2">
                <div className="skeleton h-4 w-32"></div>
                <div className="skeleton h-3 w-40"></div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="skeleton h-5 w-24"></div>
              <div className="skeleton h-5 w-20"></div>
            </div>
          </div>

          {/* Details Paragraph */}
          <div className="space-y-4">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-11/12"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-4/5"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-10/12"></div>
          </div>

          {/* Button */}
          <div className="mt-10">
            <div className="skeleton h-12 w-40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;