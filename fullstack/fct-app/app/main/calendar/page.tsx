import Header from "@/app/chatpage/conversations/[conversationId]/components/Header";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center items-center bg-white h-[calc(13.22vh)]">
        <Navbar />
      </div>
      <div className="h-screen  bg-gray-100">kawai</div>
    </div>
  );
};

export default Page;
