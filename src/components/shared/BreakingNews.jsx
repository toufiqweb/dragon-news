import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const newsData = [
    {
      id: 1,
      title: "Global Tech Companies Invest More in AI Development",
    },
    {
      id: 2,
      title: "New Smartphone Launch Gains Massive Popularity",
    },
    {
      id: 3,
      title: "Scientists Discover New Renewable Energy Source",
    },
    {
      id: 4,
      title: "Stock Market Shows Positive Growth This Week",
    },
    {
      id: 5,
      title: "Major Sports Event Draws Millions of Viewers",
    },
    {
      id: 6,
      title: "New Education Policy Introduced for Students",
    },
    {
      id: 7,
      title: "Climate Change Awareness Campaign Expands Globally",
    },
    {
      id: 8,
      title: "Electric Vehicle Sales Reach Record High",
    },
    {
      id: 9,
      title: "Healthcare Innovations Improve Patient Treatment",
    },
    {
      id: 10,
      title: "Space Agency Announces Upcoming Moon Mission",
    },
  ];
  return (
    <div className=" container mx-auto my-5 px-3 py-4 bg-base-200 flex flex-col sm:flex-row gap-3 justify-center items-center">
      <button className="py-2 px-3 bg-red-500 w-fit text-white">Latest</button>
      <Marquee speed={100} pauseOnHover={true}>
        {newsData.map((n) => (
          <span className="px-5" key={n.id}>{n.title}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
