import { getDetailsByNewsId } from "@/lib/data";
import { CalendarDays, Eye, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getDetailsByNewsId(id);
  console.log(news);

  return (
    <div className="p-5">
      <div className="max-h[80vh]  py-10 px-4">
        <div className="max-w-4xl mx-auto bg-base-100 rounded-xl border border-base-300  overflow-hidden">
          {/* Hero Image */}
          <div className=" w-full  p-5">
            <Image
              src={news.image_url}
              alt={news.title}
              height={300}
              width={300}
              className="w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
          
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="badge badge-primary badge-outline px-4 py-3">
                Category {news.category_id}
              </span>

              {news.others_info.is_trending && (
                <span className="badge badge-error gap-2 px-4 py-3">
                  <TrendingUp size={14} />
                  Trending
                </span>
              )}
            </div>

        
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
              {news.title}
            </h1>

            {/* Author */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-b border-base-300 pb-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <Image
                      src={news.author.img}
                      alt={news.author.name}
                      width={60}
                      height={60}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{news.author.name}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <CalendarDays size={14} />
                    {news.author.published_date}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-orange-500">
                  <Star size={18} fill="currentColor" />
                  <span className="font-medium">
                    {news.rating.number} ({news.rating.badge})
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                  <Eye size={18} />
                  <span>{news.total_view} views</span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-5">
              <p className="text-base md:text-lg text-gray-600 leading-8">
                {news.details}
              </p>
            </div>

            {/* Button */}
            <div className="mt-10">
              <Link href={`/category/${news?.category_id}`}>
                <button className="btn btn-primary rounded-full px-8">
                  Read More News
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
