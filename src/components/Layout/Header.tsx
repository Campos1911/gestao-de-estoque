import React from "react";

const Header = () => {
  return (
    <div className="absolute w-full z-10 text-white">
      <div className="bg-blue-500 h-16 px-5 flex sticky items-center">
        <p className="text-xl font-bold cursor-pointer">LOGO</p>
      </div>
    </div>
  );
};

export default Header;
