import { AiFillHome } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdTask } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaStickyNote } from "react-icons/fa";

export const links = [
  {
    icon: <AiFillHome />,
    title: "HOME",
    links: [
      {
        name: "タスク管理",
        icon: <MdTask />,
        link: "main/task",
      },
      {
        name: "カレンダー",
        icon: <BsFillCalendarDateFill />,
        link: "main/calendar",
      },
      { name: "メモ", icon: <FaStickyNote />, link: "main/memo" },
    ],
  },
  {
    icon: <IoMdPeople />,
    title: "TEAM",
    links: [
      {
        name: "タスク管理",
        icon: <MdTask />,
        link: "teampage/task",
      },
      {
        name: "カレンダー",
        icon: <BsFillCalendarDateFill />,
        link: "teampage/calendar",
      },
      {
        name: "メモ",
        icon: <FaStickyNote />,
        link: "teampage/memo",
      },
    ],
  },
  {
    icon: <BsFillChatLeftTextFill />,
    title: "CHAT",
    links: [
      {
        name: "チャット",
        icon: <BsFillChatLeftTextFill />,
        link: "chatpage",
      },
    ],
  },
  {
    icon: <GrMail />,
    title: "PAID",
    links: [
      {
        name: "有給申請",
        icon: <GrMail />,
        link: "paidpage",
      },
    ],
  },
];
