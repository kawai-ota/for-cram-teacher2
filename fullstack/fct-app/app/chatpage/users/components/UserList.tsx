"use client";
import { User } from "@prisma/client";
import React from "react";
import UserData from "./UserData";

interface UserListProps {
  items: User[];
}

const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <div className="px-5 flex flex-col">
      <div className="flex flex-row">
        {items.map((item) => (
          <UserData key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
