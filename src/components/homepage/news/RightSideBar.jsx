"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const RightSideBar = () => {
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGithubLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="space-y-5">
      <h1 className="text-lg font-semibold">Login with</h1>
      <div className="flex flex-col justify-center items-center gap-2">
        <button
          onClick={handleGoogleLogin}
          className="btn  w-full border-blue-400 border-2 py-5  text-blue-500 "
        >
          <FaGoogle />
          <p> Login with google</p>
        </button>
        <button
          onClick={handleGithubLogin}
          className="btn  w-full border-black border-2"
        >
          <FaGithub />
          <p> Login with github</p>
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
