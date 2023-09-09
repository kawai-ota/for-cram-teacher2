import Link from "next/link";
import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";
import { BsPlusCircleFill } from "react-icons/bs";

export default async function Users() {
  const users = await getUsers();
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center mb-4">
        <div className="bg-white relative flex items-center justify-center flex-col my-10">
          <p className="text-5xl font-bold">For Cram Teacher</p>
          <p className="text-xl mt-5">先生方に活躍を、輝ける場所で仕事を</p>
        </div>
        <Link href={"/detail/add"} className="flex items-center">
          <BsPlusCircleFill
            size={30}
            className="text-[#3EBCB5] hover:text-[#31ACA3] mr-2"
          />
          <span className="text-lg text-[#3EBCB5] hover:text-[#31ACA3]">
            教室情報を追加する
          </span>
        </Link>
      </div>
      <div className="w-full " style={{ backgroundColor: "#FBF7F1" }}>
        <p className="text-2xl mt-10 flex flex-row items-center justify-center">
          教室リスト
        </p>
        <div
          className="flex-grow 
        
        flex justify-center items-center mt-4 p-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-10 mt-4 gap-20">
            {users.map((user) => (
              <UserList key={user.id} items={[user]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
