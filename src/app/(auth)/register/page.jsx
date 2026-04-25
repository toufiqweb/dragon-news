"use client"
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => console.log(data);
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-lg  bg-base-100 shadow-md p-15">
        <h2 className="text-center text-4xl font-bold mb-4">
          Register your account
        </h2>

        <div className="divider"></div>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
          {/* Name */}
          <div className="space-y-2">
            <label className="label">
              <span className="text-black font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="input  border-none bg-base-200 py-6 px-5 w-full font-semibold"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Photo URL */}
          <div className="space-y-2">
            <label className="label">
              <span className="text-black font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photoURL", { required: true })}
              placeholder="Enter photo URL"
               className="input  border-none bg-base-200 py-6 px-5 w-full font-semibold"
            />
            {errors.photoURL && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="label">
              <span className="text-black font-semibold">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email address"
              className="input  border-none bg-base-200 py-6 px-5 w-full font-semibold"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="label">
              <span className="text-black font-semibold">Password</span>
            </label>
            <input
              type="password"
              {...register("email", { required: true })}
              placeholder="Enter your password"
              className="input  border-none bg-base-200 py-6 px-5 w-full font-semibold"
            />
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
