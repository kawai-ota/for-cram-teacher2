"use client";
import { User } from "@prisma/client";
import React from "react";
import UserBox from "./UserBox";

interface UserListProps {
  items: User[];
}

const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <div className="px-5 flex flex-col">
      <div className="flex-col">
        <div className="text-2xl font-bold text-neutral-800 py-4">
          出向可能講師リスト
        </div>
      </div>
      <div className="flex flex-row">
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
