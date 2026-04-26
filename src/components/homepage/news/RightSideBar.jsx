"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import swimming from "@/assets/swimming.png";
import playground from "@/assets/playground.png";
import classRoom from "@/assets/classRoom.png";
import facebook from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";
import instagram from "@/assets/instagram.png";

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
    <div className="space-y-6 w-full">
      {/* Login Section */}
      <div>
        <h1 className="text-lg sm:text-xl font-bold mb-5 text-gray-700">
          Login with
        </h1>

        <div className="flex flex-col gap-4">
          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="btn w-full bg-white border-2 border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 rounded-xl py-4 sm:py-6 shadow-sm hover:shadow-md flex items-center justify-center gap-3 text-sm sm:text-base"
          >
            <FaGoogle className="text-base sm:text-lg" />
            <span className="font-medium">Login with Google</span>
          </button>

          {/* Github Login */}
          <button
            onClick={handleGithubLogin}
            className="btn w-full bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 rounded-xl py-4 sm:py-6 shadow-sm hover:shadow-md flex items-center justify-center gap-3 text-sm sm:text-base"
          >
            <FaGithub className="text-base sm:text-lg" />
            <span className="font-medium">Login with Github</span>
          </button>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-5">
        <h2 className="font-bold text-lg">Find Us On</h2>

        <div className="border border-gray-300 rounded-xl overflow-hidden bg-base-100">
          {[
            {
              name: "Facebook",
              color: "text-blue-600",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33V22c4.78-.74 8.45-4.91 8.45-9.93z" />
                </svg>
              ),
            },
            {
              name: "Twitter",
              color: "text-sky-500",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 4.79a4.28 4.28 0 001.32 5.72 4.22 4.22 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.58 8.58 0 012 19.54a12.1 12.1 0 006.56 1.92c7.87 0 12.18-6.52 12.18-12.18v-.56A8.7 8.7 0 0022.46 6z" />
                </svg>
              ),
            },
            {
              name: "Instagram",
              color: "text-pink-500",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.88 1.12a.88.88 0 110 1.75.88.88 0 010-1.75zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 8.5z" />
                </svg>
              ),
            },
          ].map((social, index) => (
            <div
              key={social.name}
              className={`flex items-center gap-4 sm:gap-6 p-4 hover:bg-base-200 transition cursor-pointer ${
                index !== 2 ? "border-b border-gray-300" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                {social.icon}
              </div>

              <h3 className="text-sm sm:text-lg font-medium text-gray-600">
                {social.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Q-Zone */}
      <div className="bg-[#F3F3F3] p-4 sm:p-5 rounded-xl space-y-5 flex flex-col items-center">
        <h2 className="font-bold text-lg">Q-Zone</h2>

        <Image
          src={swimming}
          alt="swimming"
          width={300}
          height={250}
          className="w-full max-w-75 h-auto object-cover rounded-lg"
        />

        <Image
          src={playground}
          alt="playground"
          width={300}
          height={250}
          className="w-full max-w-75 h-auto object-cover rounded-lg"
        />

        <Image
          src={classRoom}
          alt="classRoom"
          width={300}
          height={250}
          className="w-full max-w-75 h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default RightSideBar;
