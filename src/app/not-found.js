"use client";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full bg-base-100 rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2">
        {/* Left Section */}
        <div className="bg-neutral text-neutral-content flex flex-col justify-center items-center p-10 text-center">
         

          <h1 className="text-7xl md:text-8xl font-extrabold">404</h1>

          <h2 className="text-2xl md:text-3xl font-bold mt-4">
            News Not Found
          </h2>

          <p className="mt-4 text-sm md:text-base opacity-80 max-w-sm">
            Looks like this article or page has been removed, moved, or never
            existed.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div className="badge badge-primary mb-4 w-fit">Dragon News</div>

          <h2 className="text-3xl font-bold text-base-content leading-snug">
            Sorry, we could not find the page you are looking for.
          </h2>

          <p className="mt-4 text-base-content/70 leading-relaxed">
            The page may have been deleted, renamed, or is temporarily
            unavailable. You can go back to the homepage and continue reading
            the latest news.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/" className="btn btn-primary rounded-xl px-8">
              Back To Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn btn-outline rounded-xl px-8"
            >
              Previous Page
            </button>
          </div>

          {/* News Cards */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <div className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <h3 className="font-bold">Latest News</h3>
                <p className="text-sm text-base-content/70">
                  Explore trending headlines and breaking stories.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <h3 className="font-bold">Categories</h3>
                <p className="text-sm text-base-content/70">
                  Browse sports, politics, culture, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
