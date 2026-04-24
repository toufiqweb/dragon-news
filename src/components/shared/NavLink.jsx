"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${pathname === href ? "border-b-2 border-b-red-500 text-black" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
