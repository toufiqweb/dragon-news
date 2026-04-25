"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const handleLogin = (data) => console.log(data);

  const handleLogin = async (data) => {
    const { email, password } = data;

    console.log(data);

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
    <div className="min-h-[80vh] flex items-center justify-center bg-base-200 px-4 my-10">
      <div className="card w-full max-w-lg  bg-base-100 shadow-md p-15">
        <h2 className="text-center text-4xl font-bold mb-4">
          Login your account
        </h2>

        <div className="divider"></div>

        <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
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
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="input  border-none bg-base-200 font-semibold py-6 px-5 w-full"
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-neutral w-full mt-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
