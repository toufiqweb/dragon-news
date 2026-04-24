import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";

const getCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const data = await getCategory();
  const categories = data.news_category;

  console.log(categories);

  return (
    <div className=" h-screen container mx-auto grid grid-cols-12 gap-5 my-10">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId = {"04"}/>
      </div>
      <div className="col-span-6 bg-green-500">
        <h1>Dragon News Home </h1>
      </div>
      <div className="col-span-3 ">
        <RightSideBar/>
      </div>
    </div>
  );
}
