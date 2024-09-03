import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col w-full bg-white h-full rounded-tl-3xl p-6 gap-4">
      <div className="flex items-center justify-center h-full">
        <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin ease-linear"></div>
      </div>
    </div>
  );
};

export default Loading;
