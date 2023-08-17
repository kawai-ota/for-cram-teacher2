"use client";
import React, { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import "./main.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { signOut } from "next-auth/react";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const screenWidthThreshold = 768; // 画面幅のしきい値

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > screenWidthThreshold) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 初期表示時にも実行

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <button
          type="button"
          className="text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white"
          style={{ background: "blue", borderRadius: "50%" }}
          onClick={toggleSidebar}
        >
          <FiSettings />
        </button>
      </div>
      <div
        className={`${
          isSidebarOpen
            ? "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"
            : "w-0"
        }`}
      >
        <Sidebar />
      </div>
      <div
        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
          isSidebarOpen ? "md:ml-72" : "flex-2"
        }`}
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>
        <div className="">
          <Link href={"/main"}>ホーム</Link>
          <Link href={"/teampage"}>チームページ</Link>
          <Link href={"/memopage"}>メモ</Link>
          <Link href={"/chatpage/users"}>チャット</Link>
          <Link href={"/paidpage"}>有給申請</Link>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Main;
