import React from "react";
import { Bookmark, Share2, Eye, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ news }) => {
  return (
    <div className="w-full bg-base-100 rounded-xl shadow-md border border-base-200 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 sm:w-12 rounded-full">
              <Image
                src={news.author?.img}
                alt={news.author?.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm sm:text-base text-base-content">
              {news.author?.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              {news.author?.published_date}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500 self-end sm:self-auto">
          <Bookmark
            size={18}
            className="cursor-pointer hover:text-primary transition"
          />
          <Share2
            size={18}
            className="cursor-pointer hover:text-primary transition"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-4">
          {news?.title}
        </h2>

        <div className="rounded-xl overflow-hidden mb-4">
          <Image
            src={news?.image_url}
            alt={news?.title}
            width={600}
            height={350}
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
          />
        </div>

        <p className="text-sm text-gray-600 line-clamp-3">{news?.details}</p>

        <Link href={`/news/${news?._id}`}>
          <button className="btn btn-link text-orange-500 px-0 mt-2 text-sm sm:text-base">
            Read More
          </button>
        </Link>

        {/* Footer */}
        <div className="border-t border-base-200 pt-4 mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-1 text-orange-400 flex-wrap">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            <span className="ml-2 text-gray-600 font-medium text-sm">
              {news.rating?.number}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Eye size={18} />
            <span>{news?.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
