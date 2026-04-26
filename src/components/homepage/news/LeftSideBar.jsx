import Image from "next/image";
import Link from "next/link";
import React from "react";
import news1 from "@/assets/news1.png";
import news2 from "@/assets/news2.png";
import news3 from "@/assets/news3.png";
import { format } from "date-fns";
import { MdOutlineDateRange } from "react-icons/md";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div>
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

      <div className="space-y-10 mt-10">
        <div className="space-y-5">
          <Image
            src={news1}
            alt="kid news"
            width={300}
            height={250}
            className="rounded-xl"
          />
          <h1 className="font-bold text-xl text-slate-800  mt-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
           <p className="text-xl flex items-center gap-4 text-black/70"><span className="font-semibold text-slate-800 ">Sports</span><MdOutlineDateRange /> {format(new Date(), " MMM dd,yyyy")}</p>
        </div>
        <div className="space-y-5">
          <Image
            src={news2}
            alt="kid news"
            width={300}
            height={250}
            className="rounded-xl"
          />
          <h1 className="font-bold text-xl text-slate-800  mt-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
           <p className="text-xl flex items-center gap-4 text-black/70"><span className="font-semibold text-slate-800 ">Sports</span><MdOutlineDateRange /> {format(new Date(), " MMM dd,yyyy")}</p>
        </div>
        <div className="space-y-5">
          <Image
            src={news3}
            alt="kid news"
            width={300}
            height={250}
            className="rounded-xl"
          />
          <h1 className="font-bold text-xl text-slate-800  mt-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
           <p className="text-xl flex items-center gap-4 text-black/70"><span className="font-semibold text-slate-800 ">Sports</span><MdOutlineDateRange /> {format(new Date(), " MMM dd,yyyy")}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
