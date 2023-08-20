import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "チャット",
        href: "/chatpage/conversations",
        icon: HiChat,
        active: pathname === "/chatpage/conversations" || !!conversationId,
      },
      {
        label: "ユーザー",
        href: "/chatpage/users",
        icon: HiUsers,
        active: pathname === "/chatpage/users",
      },
      {
        label: "Logout",
        href: "/main",
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoutes;
