import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white h-[calc(36.22vh)] relative flex items-center justify-center flex-col">
        <p className="text-5xl font-bold">For Cram Teacher</p>
        <p className="text-xl mt-5">
          先生方の活躍をなくさず、誰もが輝ける場所で仕事を。
        </p>
      </div>
      <div className="h-screen bg-gray-100"></div>
    </div>
  );
};

export default Page;
