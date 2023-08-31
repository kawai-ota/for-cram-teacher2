import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href={`/chatpage/conversations`}>
        <button>この先生にお願いする</button>
      </Link>
    </div>
  );
};

export default page;
