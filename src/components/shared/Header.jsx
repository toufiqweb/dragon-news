import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center py-10 space-y-2">
      <Image className="mx-auto" src={logo} width={400} height={300} alt="logo"></Image>
      <p className="text-black/70">Journalism Without Fear or Favour</p>
      <p className="text-xl">{format(new Date(), "EEEE, MMM dd,yyyy")}</p>
    </div>
  );
};

export default Header;
