import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const RightSideBar = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-lg font-semibold">Login with</h1>
      <div className="flex flex-col justify-center items-center gap-2">
        <Link
          href={""}
          className="btn  w-full border-blue-400 border-2 py-5  text-blue-500 "
        >
          <FaGoogle />
          <button> Login with google</button>
        </Link>
        <Link
          href={""}
          className="btn  w-full border-black border-2"
        >
          <FaGithub />
          <button> Login with github</button>
        </Link>
      </div>
    </div>
  );
};

export default RightSideBar;
