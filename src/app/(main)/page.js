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
        <h1 className="text-lg font-semibold">All Category</h1>

        <ul className="flex flex-col gap-2  mt-5 p-4">
          {categories.map((category) => (
            <li key={category.category_id} className="text-md text-black/70 py-2 cursor-pointer">{category.category_name}</li>
          ))}
        </ul>
      </div>
      <div className="col-span-6 bg-green-500">
        <h1>Dragon News Home </h1>
      </div>
      <div className="col-span-3 bg-blue-500">
        <h1>Social sections</h1>
      </div>
    </div>
  );
}
