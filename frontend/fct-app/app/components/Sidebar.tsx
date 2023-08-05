import React from "react";
import Link from "next/link";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "./Data";

const Sidebar = () => {
  const activeMenu = true;

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  // 選択されたリンクのURLを取得する関数
  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "";
  };

  // リンクがアクティブかどうかをチェックする関数
  const isLinkActive = (link: string) => {
    const currentUrl = getCurrentUrl();
    return currentUrl === `/${link}`;
  };

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <Link
            href={"/main"}
            className={`${
              isLinkActive("main") ? activeLink : normalLink
            } flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900`}
          >
            <SiShopware /> <span>FCT</span>
            <div className="flex-1"></div>{" "}
            <button
              type="button"
              className="text-xl rounded-full p-3 hover:bg-light-gray md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </Link>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase flex items-center mr-5">
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </p>
                {item.links.map((link) => (
                  <Link
                    href={`/${link.link}`}
                    key={link.name}
                    className={`${
                      isLinkActive(link.link) ? activeLink : normalLink
                    }`}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
