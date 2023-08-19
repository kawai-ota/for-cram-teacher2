import React from "react";
import { FiSettings } from "react-icons/fi";
import "./main.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { signOut } from "next-auth/react";

const main = () => {
  const activeMenu = true;

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <button
          type="button"
          className="text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white"
          style={{ background: "blue", borderRadius: "50%" }}
        >
          <FiSettings />
        </button>
      </div>
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div
        className={`dark:bg-main-bg bg-gray-100 min-h-screen w-full ${
          activeMenu ? "md:ml-72" : "flex-2"
        }`}
      ></div>
      <div className=""></div>
    </div>
  );
};

export default main;
