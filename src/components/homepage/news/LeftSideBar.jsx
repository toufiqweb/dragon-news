import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <>
      <h1 className="text-lg font-semibold">All Category</h1>

      <ul className="flex flex-col gap-2   mt-5 p-4">
        {categories.map((category) => (
          <Link
            href={`/category/${category.category_id}`}
            key={category.category_id}
            className={`${activeId === category.category_id ? "bg-[#E7E7E7] rounded-lg text-black font-semibold" : " text-black/50"}
             text-left block 
            text-md py-3 px-4 cursor-pointer`}
          >
            {category.category_name}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default LeftSideBar;
