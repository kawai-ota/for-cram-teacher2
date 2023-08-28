import React from "react";

const EmptyState = () => {
  return (
    <div
      className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center"
      style={{ backgroundColor: "#FAFBFB" }}
    >
      <div className="text-center items-center flex flex-col">
        <h1 className="mt-2 text-5xl font-bold text-gray-900">
          For Cram Teacher
        </h1>
        <h4 className="mt-3 text-xl text-gray-800">
          〜先生方に活躍を、輝ける場所で仕事を〜
        </h4>
      </div>
    </div>
  );
};

export default EmptyState;
