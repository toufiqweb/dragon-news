"use client";
import Link from "next/link";
import React from "react";
import userLogo from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink href={"/"}>Home</NavLink>
      <NavLink href={"/about"}>About</NavLink>
      <NavLink href={"/career"}>Career</NavLink>
    </>
  );

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

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
        <ul className="menu menu-horizontal px-1 gap-5 text-black/70">
          {navLinks}
        </ul>
      </div>

      {isPending ? (
        <div className="navbar-end gap-4">
          <div className="skeleton h-10 w-10 rounded-full"></div>
          <div className="skeleton h-10 w-20 rounded-lg"></div>
        </div>
      ) : (
        <div className="navbar-end gap-4">
          {user && <p className="hidden sm:inline-block">Hello, {user?.name} !</p>}
          <Image
            src={user ? user?.image : userLogo}
            alt={"user"}
            width={48}
            height={48}
            className="rounded-full h-8 sm:h-10 w-8 sm:w-10 object-cover"
          />

          {user ? (
            <Link href={"/login"}>
              <button
                onClick={async () => await authClient.signOut()}
                className="btn text-white bg-red-500"
              >
                Logout
              </button>
            </Link>
          ) : (
            <Link href={"/login"}>
              <button className="btn btn-neutral bg-gray-700">Login</button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
