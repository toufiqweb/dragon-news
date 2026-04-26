import Navbar from "@/components/shared/Navbar";
import React from "react";
import { montserrat } from "../layout";
import Footer from "@/components/shared/Footer";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
};

export default AuthLayout;
