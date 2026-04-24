import Link from "next/link";
import React from "react";
import userLogo from "@/assets/user.png"
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink href={"/"}>Home</NavLink>
      <NavLink href={"/about"}>About</NavLink>
      <NavLink href={"/career"}>Career</NavLink>
    </>
  );

  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5 text-black/70"
          >
            {navLinks}
          </ul>
        </div>
        <div></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 text-black/70">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-4">
        <Image src={userLogo} alt={"user"}/>
        <Link href={"/login"}><button className="btn btn-neutral bg-gray-700">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
