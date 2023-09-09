import React from "react";
import Button from "@/app/chatpage/components/Button";
import Link from "next/link";

const Container = async () => {
  return (
    <div className="mx-auto w-4/5 flex flex-col  justify-center items-center">
      <div className="font-bold mb-10">main</div>
      <Button>
        <Link href="/chatpage/conversations">会話を始める</Link>
      </Button>
    </div>
  );
};

export default Container;
