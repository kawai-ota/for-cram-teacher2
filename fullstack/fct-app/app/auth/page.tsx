import React from "react";
import Image from "next/image";
import AuthForm from "./AuthForm";

const Page = () => {
  return (
    <div className="flex h-screen">
      <div className="w-7/12 flex justify-center items-center bg-gray-100">
        <AuthForm />
      </div>
      <div className="w-5/12 flex flex-col justify-center items-center ">
        <Image
          alt="Logo"
          height="48"
          width="48"
          className="mx-auto"
          src="/images/logo.png"
        />
        <h1 className="mt-7  text-center text-4xl font-bold tracking-tight text-gray-900">
          For Cram Teacher
        </h1>
        <h2 className="mt-5 text-center text-2xl font-normal tracking-tight text-gray-700">
          ~全ての塾の先生へ~
        </h2>
      </div>
    </div>
  );
};

export default Page;
