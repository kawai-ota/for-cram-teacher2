import React from "react";
import Navbar from "@/app/components/Navbar";

const page = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white h-[calc(13.22vh)]">
        <Navbar />
      </div>
      <div className="h-screen bg-gray-100"></div>
    </div>
  );
};

export default page;
