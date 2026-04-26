"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  // const handleLogin = (data) => console.log(data);

  const handleLogin = async (data) => {
    const { email, password } = data;

    // console.log(data);

    const { data: res, error } = await authClient.signIn.email({
      email: email, // user email address
      password: password, // user password -> min 8 characters by default
      callbackURL: "/",
    });

    console.log(res, error);

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Login successful");
    }
  };

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     // console.log(e.target.email.value);

  //   };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="card w-full max-w-md  bg-base-100 shadow-md py-15 px-10">
        <h2 className="text-center text-3xl font-bold mb-4">
          Login your account
        </h2>

        <div className="divider"></div>

        <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
          {/* Email */}
          <div className="space-y-2">
            <label className="label">
              <span className="text-black ">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email address"
              className="input  border-none bg-base-200 py-6 px-5 w-full "
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2 ">
            <label className="label">
              <span className="text-black ">Password</span>
            </label>
            <div className="space-y-2 relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className="input  border-none bg-base-200  py-6 px-5 w-full"
              />

              <span
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-neutral w-full mt-2">
            Login
          </button>
          <p className="font-semibold text-sm text-black/70 text-center">
            Dont’t Have An Account ?{" "}
            <Link href={"/register"} className="text-red-500">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
