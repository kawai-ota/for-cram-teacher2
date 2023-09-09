"use client";
import { useRouter } from "next/navigation";
import { Fragment, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import Header from "../components/Header";
import Border from "../components/Border";
import axios from "axios";

const postDetail = async ({
  status,
  classname,
  information,
  description,
}: {
  status: string;
  classname: string;
  information: string;
  description: string;
}) => {
  try {
    const response = await axios.post("/api/post", {
      status,
      classname,
      information,
      description,
    });

    return response.data;
  } catch (error) {
    console.error("エラー:", error);
    throw error;
  }
};

const addInformation = () => {
  const router = useRouter();
  const statusRef = useRef<HTMLInputElement | null>(null);
  const classnameRef = useRef<HTMLInputElement | null>(null);
  const informationRef = useRef<HTMLTextAreaElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      statusRef.current &&
      classnameRef.current &&
      informationRef.current &&
      descriptionRef.current
    ) {
      toast.loading("送信中・・・", { id: "1" });
      try {
        await postDetail({
          status: statusRef.current?.value,
          classname: classnameRef.current?.value,
          information: informationRef.current?.value,
          description: descriptionRef.current?.value,
        });
        toast.success("送信に成功しました", { id: "1" });
        router.push("/detail");
      } catch (error) {
        toast.error("送信中にエラーが発生しました", { id: "1" });
      }
    }
  };

  return (
    <div className="w-full  bg-[#FBF7F1]">
      <Header />
      <Fragment>
        <Toaster />
        <div className="w-2/5 m-auto flex">
          <div className="flex flex-col justify-center items-center m-auto">
            <p className="text-2xl text-[#3EBCB5] font-bold p-3">
              教室情報の追加
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <div className="text-xl font-semibold mr-3 mb-3">
                  教室の状況
                </div>
                <div className="text-red-500">
                  *「協力します！」または
                  「困っています、、、」を入力してください
                </div>
              </div>
              <Border />
              <input
                ref={statusRef}
                type="text"
                required
                placeholder="(例) 協力します！ or 困ってます、、、"
                className="w-full rounded-md px-4 py-2 my-2 mt-8 mb-10"
              />
              <div className="text-xl font-semibold">教室名</div>
              <Border />
              <input
                ref={classnameRef}
                type="text"
                required
                placeholder="(例) ○○教室"
                className="w-full rounded-md px-4 py-2 my-2 mt-8 mb-10"
              />
              <div className="text-xl font-semibold">教室説明</div>
              <Border />
              <textarea
                ref={informationRef}
                required
                placeholder="(例) こんにちは、○○教室です！現在私たちの教室では、講師の人数が足りておらず・・・"
                className="w-full rounded-md px-4 py-10 mt-8 mb-10"
              />
              <div className="text-xl font-semibold">補足</div>
              <Border />
              <textarea
                ref={descriptionRef}
                required
                placeholder="(例) 数学:3人、国語6人お願い致します！"
                className="w-full rounded-md px-4 py-10  mt-8 mb-10"
              />
              <button className="flex w-full h-full justify-center text-white  px-4 py-1 shadow-xl rounded-lg m-auto bg-[#3EBCB5] hover:bg-[#31ACA3]">
                登録
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default addInformation;
