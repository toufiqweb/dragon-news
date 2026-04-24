import LeftSideBar from "@/components/homepage/news/LeftSideBar";
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
    <div className=" h-screen container mx-auto grid grid-cols-12 gap-5 my-10">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id} />
      </div>
      <div className="col-span-6 ">
        <h1>Dragon News Home </h1>
        <div className="flex flex-col gap-5">
          {news.length > 0 ? (
            news.map((n) => (
              <span key={n._id} className="p-4  border-2  rounded-xl ">
                {n.title}
              </span>
            ))
          ) : (
            <div>
              <h1 className="text-xl text-center my-5">No data is here</h1>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-3 ">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewCategoryPage;
