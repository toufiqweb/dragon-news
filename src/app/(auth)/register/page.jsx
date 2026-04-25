"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(handleSubmit);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (data) => {
    const { name, email, photoURL, password } = data;

    console.log(data);

    const { data: res, error } = await authClient.signUp.email({
      email: email, // user email address
      password: password, // user password -> min 8 characters by default
      name: name, // user display name
      image: photoURL, // User image URL (optional)
      callbackURL: "/dashboard",
    });

    console.log(res, error);

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Register successful");
    }
  };
  return (
    <div className="min-h-[80vh]  py-5 flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md  bg-base-100 shadow-md py-15 px-10">
        <h2 className="text-center text-3xl font-bold mb-4">
          Register your account
        </h2>

        <div className="divider"></div>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
          {/* Name */}
          <div className="space-y-2">
            <label className="label">
              <span className="text-black ">Your Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="input  border-none bg-base-200 py-6 px-5 w-full "
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Photo URL */}
          <div className="space-y-2">
            <label className="label">
              <span className="text-black ">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photoURL", { required: true })}
              placeholder="Enter photo URL"
              className="input  border-none bg-base-200 py-6 px-5 w-full "
            />
            {errors.photoURL && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

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

          {/* Terms */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span className="text-sm">Accept Term & Conditions</span>
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-neutral w-full mt-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
