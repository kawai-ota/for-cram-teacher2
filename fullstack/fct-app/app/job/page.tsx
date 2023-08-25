import React from "react";
import Image from "next/image";
import Container from "./components/Container";

const Page = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white h-[calc(36.22vh)] relative flex items-center justify-center flex-col">
        <p className="text-5xl font-bold">For Cram Teacher</p>
        <p className="text-xl mt-5">
          先生方に活躍を、誰もが輝ける場所で仕事を。
        </p>
      </div>
      <div className="h-screen bg-gray-100">
        <Container />
      </div>
    </div>
  );
};

export default Page;
