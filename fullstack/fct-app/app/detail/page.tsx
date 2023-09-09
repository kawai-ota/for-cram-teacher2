import Link from "next/link";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaSadCry } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";

async function fetchDetails() {
  const response = await fetch("http://localhost:3000/api/post", {
    next: {
      revalidate: 10,
    },
  });
  const data = await response.json();
  return data.post;
}

export default async function DetailHome() {
  const posts = await fetchDetails();

  return (
    <div className="flex flex-col h-screen">
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
      <main className="w-full bg-[#FBF7F1]">
        <p className="flex justify-center text-2xl font-bold mt-10">
          教室掲示板
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
          {posts?.map((post: any) => (
            <Link href={`/detail/article/${post.id}`}>
              <div
                className="p-4 bg-gray-200 flex flex-col  mx-auto my-10 rounded-lg cursor-pointer border border-transparent transition duration-300 ease-in-out  hover:border-[#3EBCB5] hover:shadow-sm"
                style={{ height: "505px", width: "300px" }}
              >
                <div className="flex flex-row items-center mx-auto my-10">
                  {post.status === "協力します！" ? (
                    <div className="flex flex-row items-center">
                      <p className="mr-3">協力します!</p>
                      <AiFillFire size={30} className="text-red-600" />
                    </div>
                  ) : (
                    <div className="flex flex-row items-center">
                      <p className="mr-3">困っています、、、</p>
                      <FaSadCry size={30} className="text-[#3EBCB5]" />
                    </div>
                  )}
                </div>
                <hr className="border-t border-gray-400 mt-3 mb-5" />
                <div className="flex flex-col justify-center mx-auto mt-0">
                  <div className="flex flex-col">
                    <blockquote className="font-bold text-gray-700">
                      {new Date(post.date).toLocaleDateString()}
                    </blockquote>
                    <p className="mx-auto my-5 text-xl font-bold">
                      {post.classname}
                    </p>
                    <div className="mx-auto text-gray-900 leading-7">
                      <h2>{post.information}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
