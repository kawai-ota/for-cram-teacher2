import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";

export default async function Users() {
  const users = await getUsers();
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white h-[calc(36.22vh)] relative flex items-center justify-center flex-col my-10">
        <p className="text-5xl font-bold">For Cram Teacher</p>
        <p className="text-xl mt-5">先生方に活躍を、輝ける場所で仕事を。</p>
      </div>
      <div className="flex-grow bg-gray-100 flex justify-center items-center mt-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 mt-4 gap-20">
          {users.map((user) => (
            <UserList key={user.id} items={[user]} />
          ))}
        </div>
      </div>
    </div>
  );
}
