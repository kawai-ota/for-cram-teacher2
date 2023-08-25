import React from "react";
import AuthForm from "./AuthForm";

const Page = () => {
  return (
    <div className="flex h-screen">
      <div className="w-7/12 flex justify-center items-center bg-gray-100">
        <AuthForm />
      </div>
      <div className="w-5/12 flex flex-col justify-center items-center ">
        <h1 className="mt-7 text-center text-5xl font-bold tracking-tight text-gray-900">
          For Cram Teacher
        </h1>
        <h2 className="mt-5 text-center text-2xl tracking-tight text-gray-700">
          ~先生方に活躍を、輝ける場所を~
        </h2>
      </div>
    </div>
  );
};

export default Page;
