import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";

export default async function Users() {
  const users = await getUsers();
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col h-screen">
          <div className="bg-white h-[calc(36.22vh)] relative flex items-center justify-center flex-col">
            <p className="text-5xl font-bold">For Cram Teacher</p>
            <p className="text-xl mt-5">
              先生方に活躍を、誰もが輝ける場所で仕事を。
            </p>
          </div>
          <div className="h-screen bg-gray-100 flex items-center justify-center">
            <div className="flex flex-row w-1000 h-full ">
              <UserList items={users} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
