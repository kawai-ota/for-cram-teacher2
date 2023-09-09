"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "@/app/chatpage/components/Button";
import Link from "next/link";

interface PostData {
  id: string;
  status: string;
  classname: string;
  information: string;
  description: string;
  image: string;
}

const detailInformation = ({ params }: { params: { id: string } }) => {
  const [postData, setPostData] = useState<PostData | null>(null);

  useEffect(() => {
    const getPostById = async (id: string) => {
      try {
        const res = await fetch(`http://localhost:3000/api/post/${id}`);
        const data = await res.json();
        return data.post;
      } catch (error) {
        console.error("エラー:", error);
        throw error;
      }
    };

    getPostById(params.id)
      .then((data) => {
        setPostData(data);
      })
      .catch((error) => {
        console.error("記事を取得できませんでした", error);
      });
  }, [params.id]);

  return (
    <div className="bg-[#FBF7F1] min-h-screen mb-10">
      <div className="w-full bg-[#FBF7F1]">
        <Header />
        <div className="w-2/5 mx-auto ">
          {postData ? (
            <>
              <div className="flex flex-col mb-8">
                <h2 className="text-2xl text-gray-900 mt-10 font-semibold">
                  教室状況
                </h2>
                <h2 className="border-b-1 border-solid pb-3 border-gray-400" />
                <h1 className="flex justify-center mt-10 text-xl">
                  {postData.status}
                </h1>
              </div>
              <div className="flex flex-col mb-8">
                <p className="flex text-2xl text-gray-900 mt-10 font-semibold">
                  教室名
                </p>
                <h2 className="border-b-1 border-solid pb-3 border-gray-400" />
                <p className="flex justify-center mt-10 text-xl">
                  {postData.classname}
                </p>
              </div>
              <div className="flex flex-col mb-8">
                <p className="flex text-2xl text-gray-900 mt-10 font-semibold">
                  教室説明
                </p>
                <h2 className="border-b-1 border-solid pb-3 border-gray-400" />
                <p className="flex justify-center mt-10 leading-7 text-lg">
                  {postData.information}
                </p>
              </div>
              <div className="flex flex-col mb-8">
                <p className="flex text-2xl text-gray-900 mt-10 font-semibold">
                  補足
                </p>
                <h2 className="border-b-1 solid pb-3 border-gray-400" />
                <p className="flex justify-center text-gray-900 mt-10 text-lg">
                  {postData.description}
                </p>
              </div>
              <div className="flex flex-col justify-center mb-4">
                <Button fullWidth>
                  <Link href="/chatpage/users" className="h-full w-full">
                    会話を探す
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col justify-center mb-4">
                <Button fullWidth danger>
                  <Link href="/detail" className="h-full w-full">
                    リストに戻る
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            <p>記事を読み込んでいます...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default detailInformation;
