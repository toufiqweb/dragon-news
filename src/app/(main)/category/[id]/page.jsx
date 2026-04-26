import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategory, getNesByCategoryId } from "@/lib/data";
import React from "react";

const NewCategoryPage = async ({ params }) => {
  const { id } = await params;
  //   console.log(id);
  const data = await getCategory();
  const categories = data.news_category;
  const news = await getNesByCategoryId(id);

  return (
    <div className="min-h-[80vh] container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 my-10 px-4">
      <div className="lg:col-span-3 order-2 lg:order-1">
        <LeftSideBar categories={categories} activeId={id} />
      </div>

      <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
        <h1 className="text-lg font-semibold">Dragon News</h1>

        <div className="flex flex-col gap-5">
          {news.length > 0 ? (
            news.map((n) => <NewsCard key={n._id} news={n} />)
          ) : (
            <div>
              <h1 className="text-xl text-center my-5">No data is here</h1>
            </div>
          )}
        </div>
      </div>

      <div className="lg:col-span-3 order-3 mx-0 lg:mx-5">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewCategoryPage;
