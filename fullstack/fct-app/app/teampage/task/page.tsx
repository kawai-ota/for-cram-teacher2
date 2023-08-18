import Navbar from "@/app/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className=" bg-white h-[calc(13.22vh)]">
        <Navbar />
      </div>
      <div className="h-screen bg-gray-100">tawai</div>
    </div>
  );
};

export default page;
