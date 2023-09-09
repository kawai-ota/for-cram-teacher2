import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import Avatar from "../../components/Avatar";
import LoadingModal from "../../components/LoadingModal";

interface UserDataProps {
  data: User;
}

async function fetchDetails() {
  const res = await fetch("http://localhost:3000/api/post", {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();
  return data.post;
}

const UserData: React.FC<UserDataProps> = async ({ data }) => {
  // const posts = await fetchDetails();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = useCallback(() => {
    setIsLoading(true);
    axios
      .post("/api/conversations", { userId: data.id })
      .then((data) => {
        router.push(`/chatpage/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);
  return (
    <>
      {isLoading && <LoadingModal />}
      <div
        onClick={handleClick}
        className="w-full relative flex justify-between items-center space-x-3 bg-gray-200 mr-10 p-8 rounded-lg cursor-pointer border border-transparent transition duration-300 ease-in-out hover:border-[#3EBCB5] hover:shadow-sm"
        style={{ width: "300px", height: "505px" }}
      >
        <Avatar user={data} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <div className="flex justify-between items-center mb-1">
              <p className="text-xl text-gray-900 font-semibold">{data.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
