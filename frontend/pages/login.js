import React from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = async ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <Layout title="Log in">
      <form
        className="mx-auto max-w-screen-md p-10 shadow-xl rounded-lg  "
        onSubmit={handleSubmit(submit)}
      >
        <h1 className="text-2xl text-center p-5 font-pop font-bold ">
          Login | CR
        </h1>
        <div className="mb-4 font-pop font-bold">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", { required: "please enter a email" })}
            className="w-full border-green-500 p-2 mt-5  border-2 rounded-md"
            id="email"
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4 font-pop font-bold">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "please enter a password",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            className="w-full border-green-500 p-2 mt-5  border-2 rounded-md"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="mt-5 font-pop font-bold">
          <button className="bg-green-200 text-green-800 hover:bg-green-400 p-3 rounded-b-md ">
            Login
          </button>
        </div>
      </form>
    </Layout>
  );
}
